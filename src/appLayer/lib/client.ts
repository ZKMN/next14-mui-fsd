import { from, HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache, SSRMultipartLink } from '@apollo/experimental-nextjs-app-support';

import { config } from '@/shared/lib/config';

import { headersLink, refreshTokenLink } from '../lib/helpers';

const httpLink = new HttpLink({
  uri: config.urls.API,
  // headers: {
  //   'x-api-key': config.keys.xAPI,
  //   'x-orderhouse-tenant': config.xOrderhouseTenant,
  // },
});

const SSRLink = from([
  new SSRMultipartLink({ stripDefer: true }),
  headersLink,
  refreshTokenLink,
  httpLink,
]);

const clientLink = from([headersLink, refreshTokenLink, httpLink]);

export const makeApolloClient = () => new ApolloClient({
  link: typeof window === 'undefined' ? SSRLink : clientLink,
  ssrMode: typeof window === 'undefined',
  connectToDevTools: true,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
