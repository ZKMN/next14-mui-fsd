import { Metadata } from 'next';

import { ICONS, LANGUAGES_ALTERNATE, ROBOTS } from '@/shared/consts';
import { ELanguages } from '@/shared/types';

import { getAlternateELanguages } from './common';

import { config } from '../../config';

export const getEnMetadata = ({
  url = config.urls.site,
  title,
  description,
}: {
  url?: string;
  title: string;
  description: string;
}): Metadata => ({
  title,
  description,
  category: 'Site',
  metadataBase: new URL(config.urls.site),
  applicationName: 'Site',
  icons: ICONS,
  robots: ROBOTS,
  alternates: {
    canonical: url,
    languages: LANGUAGES_ALTERNATE,
  },
  openGraph: {
    url,
    title,
    description,
    type: 'website',
    locale: ELanguages.EN,
    phoneNumbers: [],
    siteName: 'Site',
    alternateLocale: getAlternateELanguages(ELanguages.EN),
    countryName: 'USA',
    images: {
      url: '',
      width: 200,
      height: 200,
    },
  },
  twitter: {
    title,
    description,
    site: url,
    card: 'summary_large_image',
    images: {
      url: '',
      width: 200,
      height: 200,
    },
  },
});

export const getArticleEnMetadata = ({
  url,
  tags,
  title,
  images,
  description,
  publishedTime,
}: {
  url: string;
  tags: string[];
  title: string;
  description: string;
  publishedTime: string;
  images: {
    url: string;
    width: string;
    height: string;
  };
}): Metadata => ({
  title,
  description,
  metadataBase: new URL(config.urls.site),
  category: 'Site',
  applicationName: 'Site',
  icons: ICONS,
  robots: ROBOTS,
  alternates: {
    canonical: url,
    languages: LANGUAGES_ALTERNATE,
  },
  openGraph: {
    url,
    tags,
    title,
    images,
    description,
    publishedTime,
    authors: 'Site',
    type: 'article',
    locale: ELanguages.EN,
    siteName: 'Site',
    countryName: 'USA',
    phoneNumbers: [],
    alternateLocale: getAlternateELanguages(ELanguages.EN),
  },
  twitter: {
    title,
    images,
    description,
    site: url,
  },
});
