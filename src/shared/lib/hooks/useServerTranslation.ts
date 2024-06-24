import { initReactI18next } from 'react-i18next/initReactI18next';
import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

import { DEFAULT_FILE_NAME } from '@/shared/consts';
import { getI18IntlOptions } from '@/shared/lib/helpers';
import { TLanguages } from '@/shared/types';

const initI18next = async (lng: TLanguages, filename: string) => {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((lng: string, filename: string) => import(`../../assets/i18n/${lng}/${filename}.json`)))
    .init(getI18IntlOptions(lng, filename));

  return i18nInstance;
};

export const useServerTranslation = async (lng: TLanguages, filename = DEFAULT_FILE_NAME, options = { keyPrefix: '' }) => {
  const i18nextInstance = await initI18next(lng, filename);

  return {
    i18n: i18nextInstance,
    translate: i18nextInstance?.getFixedT(lng, Array.isArray(filename) ? filename[0] : filename, options.keyPrefix),
  };
};
