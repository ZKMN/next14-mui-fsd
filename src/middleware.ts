import acceptLanguage from 'accept-language';
import { NextRequest, NextResponse } from 'next/server';

import { DEFAULT_LNG, I18N_COOKIE_NAME, LANGUAGES } from './shared/consts';

acceptLanguage.languages(LANGUAGES);

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const {
    url,
    nextUrl: { pathname },
    cookies,
    headers,
  } = request;

  let lng;
  if (cookies.has(I18N_COOKIE_NAME)) lng = acceptLanguage.get(cookies.get(I18N_COOKIE_NAME)?.value);
  if (!lng) lng = acceptLanguage.get(headers.get('Accept-Language'));
  if (!lng) lng = DEFAULT_LNG;

  if (PUBLIC_FILE.test(pathname)) {
    return undefined;
  }

  // Redirect if lng in path is not supported
  if (!LANGUAGES.some((lng) => pathname.startsWith(`/${lng}`)) && !pathname.startsWith('/_next')) {
    return NextResponse.redirect(new URL(`/${lng}${pathname}`, url));
  }

  if (headers.has('referer')) {
    const refererUrl = new URL(String(headers.get('referer')));
    const lngInReferer = LANGUAGES.find((lng) => refererUrl.pathname.startsWith(`/${lng}`));
    const response = NextResponse.next();

    if (lngInReferer) {
      response.cookies.set(I18N_COOKIE_NAME, lngInReferer);
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};
