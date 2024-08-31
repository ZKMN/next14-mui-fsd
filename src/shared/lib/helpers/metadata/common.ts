import { ELanguages, ELocales } from '@/shared/types';

import { config } from '../../config';

export const getAlternateELanguages = (lang: ELanguages) => {
  const langs = Object.values(ELanguages).filter((lng) => lng !== lang);

  return langs;
};

export const generateAlternateUrls = (path?: string) => ({
  en: `${config.urls.site}/${ELocales.EN}${path}`,
});
