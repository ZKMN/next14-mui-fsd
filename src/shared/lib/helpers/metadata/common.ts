import { ELanguages } from '@/shared/types';

export const getAlternateELanguages = (lang: ELanguages) => {
  const langs = Object.values(ELanguages).filter((lng) => lng !== lang);

  return langs;
};
