/* eslint-disable max-len */
import { Metadata } from 'next';
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';

import { ICONS } from '@/shared/consts';

import { config } from '../config';

const robots: Robots = {
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

export const getEsMetadata = ({
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
  metadataBase: new URL(config.urls.site),
  category: 'Zapatos',
  applicationName: 'Weestep kids',
  alternates: {
    canonical: url,
    languages: {
      'es-ES': new URL(`${config.urls.site}/es`),
      'en-US': new URL(`${config.urls.site}/en`),
    },
  },
  icons: ICONS,
  robots,
  keywords: [
    'Zapatos para niños',
    'Calzado infantil',
    'Zapatos para bebés',
    'Zapatos lindos y cómodos',
    'Calzado moderno para niños',
    'Zapatos elegantes para niños',
    'Zapatos asequibles para niños',
    'Calzado de alta calidad para niños',
    'Tienda de zapatos para niños en línea',
    'Marcas de calzado infantil',
    'Mejores zapatos para niños',
    'Tallas de zapatos para niños',
    'Zapatos de moda para niños',
    'Venta de zapatos para niños',
    'Tendencias de calzado infantil',
    'Zapatos para niños varones',
    'Zapatos para niñas',
    'Zapatillas para niños',
    'Sandalias para niños',
    'Zapatos escolares para niños',
    'Zapatos deportivos para niños',
    'Zapatos casuales para niños',
    'Accesorios para zapatos infantiles',
    'Zapatos ecológicos para niños',
    'Descuentos en zapatos para niños',
    'Reseñas de zapatos infantiles',
    'Guía de compra de zapatos para niños',
    'Liquidación de zapatos para niños',
    'Tendencias de moda en zapatos para niños',
    'Zapatos ortopédicos para niños',
    'Calzado infantil de soporte',
    'Sandalias ortopédicas para niños',
    'Zapatos con soporte para el arco para niños',
  ],
  openGraph: {
    url,
    title,
    description,
    type: 'website',
    locale: 'es-ES',
    siteName: 'Weestep kids',
    countryName: 'Spain',
    phoneNumbers: ['+34611822584'],
    alternateLocale: 'en-US',
    images: {
      url: 'https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2',
      width: 200,
      height: 200,
    },
  },
  twitter: {
    title,
    description,
    site: url,
    images: {
      url: 'https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2',
      width: 200,
      height: 200,
    },
  },
});

export const getArticleEsMetadata = ({
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
  category: 'Zapatos',
  applicationName: 'Weestep kids',
  alternates: {
    canonical: url,
    languages: {
      'es-ES': new URL(`${config.urls.site}/es`),
      'en-US': new URL(`${config.urls.site}/en`),
    },
  },
  icons: ICONS,
  robots,
  openGraph: {
    url,
    tags,
    title,
    images,
    description,
    publishedTime,
    authors: 'Weestep Kids',
    type: 'article',
    locale: 'es-ES',
    siteName: 'Weestep kids',
    countryName: 'Spain',
    phoneNumbers: ['+34611822584'],
  },
  twitter: {
    title,
    images,
    description,
    site: url,
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
  category: 'Shoes',
  applicationName: 'Weestep kids',
  alternates: {
    canonical: url.replace('/en', '/es'),
    languages: {
      'es-ES': new URL(`${config.urls.site}/es`),
      'en-US': new URL(`${config.urls.site}/en`),
    },
  },
  icons: ICONS,
  robots,
  openGraph: {
    url,
    tags,
    title,
    images,
    description,
    publishedTime,
    authors: 'Weestep Kids',
    type: 'article',
    locale: 'es-ES',
    siteName: 'Weestep kids',
    countryName: 'Spain',
    phoneNumbers: ['+34611822584'],
  },
  twitter: {
    title,
    images,
    description,
    site: url,
  },
});

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
  category: 'Shoes',
  metadataBase: new URL(config.urls.site),
  applicationName: 'Weestep kids',
  alternates: {
    canonical: url.replace('/en', '/es'),
    languages: {
      'es-ES': new URL(`${config.urls.site}/es`),
      'en-US': new URL(`${config.urls.site}/en`),
    },
  },
  icons: ICONS,
  robots,
  keywords: [
    'Kids shoes',
    "Children's footwear",
    'Toddler shoes',
    'Baby shoes',
    'Cute and comfortable shoes',
    "Trendy kids' footwear",
    "Stylish children's shoes",
    'Affordable kids shoes',
    "High-quality children's footwear",
    'Kids shoe store online',
    "Children's shoe brands",
    'Best shoes for kids',
    "Children's shoe sizes",
    'Fashionable kids shoes',
    'Kids shoe sale',
    "Children's shoe trends",
    "Boys' shoes",
    "Girls' shoes",
    'Kids sneakers',
    "Children's sandals",
    'School shoes for kids',
    "Kids' sports shoes",
    'Casual kids shoes',
    "Children's shoe accessories",
    'Eco-friendly kids shoes',
    'Kids shoe discounts',
    "Children's shoe reviews",
    'Kids shoe shopping guide',
    'Kids shoe clearance',
    "Children's shoe fashion trends",
    'Orthopedic kids shoes',
    "Supportive children's footwear",
    'Orthopedic sandals for kids',
    'Arch support shoes for children',
  ],
  openGraph: {
    url,
    title,
    description,
    type: 'website',
    locale: 'en-US',
    phoneNumbers: ['+34611822584'],
    siteName: 'Weestep kids',
    alternateLocale: 'es-ES',
    countryName: 'Spain',
    images: {
      url: 'https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2',
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
      url: 'https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2',
      width: 200,
      height: 200,
    },
  },
});
