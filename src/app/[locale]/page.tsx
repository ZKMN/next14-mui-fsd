import { Metadata } from 'next';

import { Home } from '@/pagesLayer/Home';

import { config } from '@/shared/lib/config';
import { getEnMetadata } from '@/shared/lib/helpers';
import { ELocales } from '@/shared/types';

export async function generateMetadata(): Promise<Metadata> {
  return getEnMetadata({
    url: `${config.urls.site}/${ELocales.EN}`,
    title: 'Site',
    description: 'Fresh Layout',
  });
}

const HomePage = () => <Home />;

export default HomePage;
