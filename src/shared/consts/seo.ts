import { Languages } from 'next/dist/lib/metadata/types/alternative-urls-types';
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';

import { config } from '../lib/config';
import { ELocales } from '../types';

export const ICONS = [];

export const ROBOTS: Robots = {
  index: true,
  follow: true,
  nosnippet: false,
  notranslate: false,
  noimageindex: false,
  noarchive: false,
  'max-snippet': -1,
  'max-image-preview': 'standard',
  'max-video-preview': -1,
  googleBot: {
    index: true,
    follow: true,
    nosnippet: false,
    notranslate: false,
    noimageindex: false,
    noarchive: false,
    'max-snippet': -1,
    'max-image-preview': 'standard',
    'max-video-preview': -1,
  },
};

export const LANGUAGES_ALTERNATE: Languages<string> = {
  en: `${config.urls.site}/${ELocales.EN}`,
};
