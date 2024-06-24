import acceptLanguage from 'accept-language';
import { NextRequest, NextResponse } from 'next/server';

import { DEFAULT_LOCALE, I18N_COOKIE_NAME, LANGUAGES } from './shared/consts';

acceptLanguage.languages(LANGUAGES);

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const {
    url,
    nextUrl: { pathname },
    cookies,
    headers,
  } = request;

  let locale;
  if (cookies.has(I18N_COOKIE_NAME)) locale = acceptLanguage.get(cookies.get(I18N_COOKIE_NAME)?.value);
  if (!locale) locale = acceptLanguage.get(headers.get('Accept-Language'));
  if (!locale) locale = DEFAULT_LOCALE;

  if (PUBLIC_FILE.test(pathname)) {
    return undefined;
  }

  // Redirect if locale in path is not supported
  if (!LANGUAGES.some((locale) => pathname.startsWith(`/${locale}`)) && !pathname.startsWith('/_next')) {
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, url));
  }

  if (headers.has('referer')) {
    const refererUrl = new URL(String(headers.get('referer')));
    const localeInReferer = LANGUAGES.find((locale) => refererUrl.pathname.startsWith(`/${locale}`));
    const response = NextResponse.next();

    if (localeInReferer) {
      response.cookies.set(I18N_COOKIE_NAME, localeInReferer);
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};
