import { ApolloError } from '@apollo/client';
import { MutationBaseOptions } from '@apollo/client/core/watchQueryOptions';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

import { ELocales } from './common';

export interface IRoutePathParams extends Params {
  locale: ELocales;
  productId: string;
  locationId: string;
}

export interface INextPageParams {
  params: IRoutePathParams;
}

export interface IMetadataParams {
  path: string;
  title: string;
  description: string;
}

export interface IHookOptionsParams<T = undefined> {
  onError?: (error?: ApolloError) => void;
  onSuccess?: (data?: T) => void;
  refetchQueries?: MutationBaseOptions['refetchQueries'];
}

export interface IGeoOptionsParams {
  onError?: (error: GeolocationPositionError) => void;
  onSuccess?: (data: GeolocationCoordinates) => void;
}
