import { Metadata } from 'next';

import { ICONS, ROBOTS } from '@/shared/consts';
import { ELanguages, ELocales, IMetadataParams } from '@/shared/types';

import { generateAlternateUrls, getAlternateELanguages } from './common';

import { config } from '../../config';

export const getEnMetadata = ({
  path,
  title,
  description,
}: IMetadataParams): Metadata => ({
  title,
  description,
  category: 'Site',
  metadataBase: new URL(config.urls.site),
  applicationName: 'Site',
  icons: ICONS,
  robots: ROBOTS,
  alternates: {
    canonical: `${config.urls.site}/${ELocales.EN}${path}`,
    languages: generateAlternateUrls(path),
  },
  openGraph: {
    url: `${config.urls.site}/${ELocales.EN}${path}`,
    title,
    description,
    type: 'website',
    locale: ELanguages.EN,
    phoneNumbers: [],
    siteName: 'Site',
    alternateLocale: getAlternateELanguages(ELanguages.EN),
    countryName: 'Country',
    images: {
      url: '',
      width: 200,
      height: 200,
    },
  },
  twitter: {
    title,
    description,
    site: `${config.urls.site}/${ELocales.EN}${path}`,
    card: 'summary_large_image',
    images: {
      url: '',
      width: 200,
      height: 200,
    },
  },
});

export const getArticleEnMetadata = ({
  path,
  tags,
  title,
  images,
  description,
  publishedTime,
}: {
  tags: string[];
  publishedTime: string;
  images: {
    url: string;
    width: string;
    height: string;
  };
} & IMetadataParams): Metadata => ({
  title,
  description,
  metadataBase: new URL(config.urls.site),
  category: 'Site',
  applicationName: 'Site',
  icons: ICONS,
  robots: ROBOTS,
  alternates: {
    canonical: `${config.urls.site}/${ELocales.EN}${path}`,
    languages: generateAlternateUrls(path),
  },
  openGraph: {
    url: `${config.urls.site}/${ELocales.EN}${path}`,
    tags,
    title,
    images,
    description,
    publishedTime,
    authors: 'Site',
    type: 'article',
    locale: ELanguages.EN,
    siteName: 'Site',
    countryName: 'Country',
    phoneNumbers: [],
    alternateLocale: getAlternateELanguages(ELanguages.EN),
  },
  twitter: {
    title,
    images,
    description,
    site: `${config.urls.site}/${ELocales.EN}${path}`,
  },
});
