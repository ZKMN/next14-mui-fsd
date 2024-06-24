'use client';

import { useCallback, useEffect, useState } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import i18next, { i18n } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

import { DEFAULT_FILE_NAME, LANGUAGES } from '@/shared/consts';
import { getI18IntlOptions } from '@/shared/lib/helpers';
import { useTypedParams } from '@/shared/lib/hooks';

const runsOnServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((lng: string, filename: string) => import(`../../assets/i18n/${lng}/${filename}.json`)))
  .init({
    ...getI18IntlOptions(),
    lng: undefined, // let detect the language on client side
    preload: runsOnServerSide ? LANGUAGES : [],
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'navigator'],
    },
  });

export const useClientTranslation = (
  filename = DEFAULT_FILE_NAME,
  options = { keyPrefix: '' },
): [(label: string, values?: Record<string, unknown>) => string, { i18n: i18n; ready: boolean; }] => {
  const { lng } = useTypedParams();

  const translation = useTranslation(filename, options);

  const { i18n } = translation;

  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;

      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);

    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return;

      i18n.changeLanguage(lng);
    }, [lng, i18n]);
  }

  const handleTranslation = useCallback((label: string, values?: Record<string, unknown>) => translation.t(label, values), []);

  return [handleTranslation, { i18n, ready: translation.ready }];
};
