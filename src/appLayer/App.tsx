'use client';

import { memo, Suspense } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { ApolloWrapperProvider } from '@/appLayer/providers';

import { Header } from '@/widgets/Header';

import {
  DataLoading,
  LibLoader,
  NotifyContainer,
} from './components';

import '@/shared/styles/globals.scss';

export const App = memo(({ children }: React.PropsWithChildren) => (
  <ApolloWrapperProvider>
    <AppRouterCacheProvider>
      <Suspense>
        <DataLoading />
      </Suspense>

      <LibLoader />
      <NotifyContainer />

      <Header />

      <main>{children}</main>
    </AppRouterCacheProvider>
  </ApolloWrapperProvider>
));
