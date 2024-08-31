import { initReactI18next } from 'react-i18next/initReactI18next';
import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

import { DEFAULT_FILE_NAME } from '@/shared/consts';
import { getI18IntlOptions } from '@/shared/lib/helpers';
import { ELocales } from '@/shared/types';

const initI18next = async (locale: ELocales, filename: string) => {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((locale: string, filename: string) => import(`../../assets/i18n/${locale}/${filename}.json`)))
    .init(getI18IntlOptions(locale, filename));

  return i18nInstance;
};

export const getServerTranslation = async (
  locale: ELocales,
  filename = DEFAULT_FILE_NAME,
  options = { keyPrefix: '' },
) => {
  const i18nextInstance = await initI18next(locale, filename);

  return {
    i18n: i18nextInstance,
    translate: i18nextInstance?.getFixedT(locale, filename, options.keyPrefix),
  };
};
