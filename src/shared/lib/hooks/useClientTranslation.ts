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
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? LANGUAGES : [],
  });

export const useClientTranslation = (
  filename = DEFAULT_FILE_NAME,
  options = { keyPrefix: '' },
): [(label: string, values?: Record<string, unknown>) => string, { i18n: i18n; ready: boolean; }] => {
  const { locale } = useTypedParams();

  const translation = useTranslation(filename, options);

  const { i18n } = translation;

  if (runsOnServerSide && locale && i18n.resolvedLanguage !== locale) {
    i18n.changeLanguage(locale);
  } else {
    const [activeLocale, setActiveLocale] = useState(i18n.resolvedLanguage);

    useEffect(() => {
      if (activeLocale === i18n.resolvedLanguage) return;

      setActiveLocale(i18n.resolvedLanguage);
    }, [activeLocale, i18n.resolvedLanguage]);

    useEffect(() => {
      if (!locale || i18n.resolvedLanguage === locale) return;

      i18n.changeLanguage(locale);
    }, [locale, i18n]);
  }

  const handleTranslation = useCallback((label: string, values?: Record<string, unknown>) => {
    const prefixedKey = options.keyPrefix ? `${options.keyPrefix}.${label}` : label;
    const translationNotExists = i18n.exists(prefixedKey, { ns: filename });

    if (translationNotExists) {
      return translation.t(label, values);
    }

    return label;
  }, [i18n, options.keyPrefix, translation]);

  return [handleTranslation, { i18n, ready: translation.ready }];
};
