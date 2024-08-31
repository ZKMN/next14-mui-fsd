import { Robots } from 'next/dist/lib/metadata/types/metadata-types';

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
