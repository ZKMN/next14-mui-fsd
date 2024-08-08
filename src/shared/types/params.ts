import { AxiosError } from 'axios';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

import { ELocales } from './common';

export interface IHookOptionsParams {
  onError?: (error?: AxiosError) => void;
  onSuccess?: <T>(data?: T) => void;
}

export interface IRoutePathParams extends Params {
  locale: ELocales;
}

export interface INextPageParams {
  params: IRoutePathParams;
}
