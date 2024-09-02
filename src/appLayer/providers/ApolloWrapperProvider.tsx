'use client';

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support';

import { makeApolloClient } from '../lib/client';

export const ApolloWrapperProvider = ({ children }: React.PropsWithChildren) => (
  <ApolloNextAppProvider makeClient={makeApolloClient}>
    {children}
  </ApolloNextAppProvider>
);
