import { DEFAULT_FILE_NAME, DEFAULT_LOCALE, LANGUAGES } from '@/shared/consts';

export function getI18IntlOptions(locale = DEFAULT_LOCALE, ns = DEFAULT_FILE_NAME) {
  return {
    // debug: true,
    ns,
    locale,
    defaultNS: DEFAULT_FILE_NAME,
    fallbackLocale: DEFAULT_LOCALE,
    fallbackNS: DEFAULT_FILE_NAME,
    supportedLocales: LANGUAGES,
  };
}
