import { Options, Result } from 'ahooks/lib/useRequest/src/types';
import {
  AxiosError,
  AxiosResponse,
  RawAxiosRequestHeaders,
  ResponseType,
} from 'axios';
import { SWRConfiguration } from 'swr';

type TRequestOptions<R, TParams> = Omit<Options<AxiosResponse<R>, [TParams]>, 'onError' | 'defaultParams' | 'manual'> & {
  onError?: (e: AxiosError<R> | Error, params: [TParams]) => void;
};

export interface IAPIRequestParams<P = undefined> {
  url: string;
  baseURL?: string;
  payload?: P;
  headers?: RawAxiosRequestHeaders;
  responseType?: ResponseType;
  withCredentials?: boolean;
}

export interface IAPIHookOptions<R, TParams = undefined> {
  url: string;
  config?: TParams extends undefined ? SWRConfiguration<R> : TRequestOptions<R, TParams>;
  baseURL?: string;
  headers?: RawAxiosRequestHeaders;
  queryParams?: Record<string, unknown>;
  withCredentials?: boolean;
}

export interface IRequestCallbackParams<P = undefined> {
  payload?: P;
  callbackURL?: string;
  callbackQueryParams?: Record<string, unknown>;
}

export type TRequestCallback<P = undefined> = (data?: P extends undefined
  ? Omit<IRequestCallbackParams, 'payload'>
  : IRequestCallbackParams<P>
) => void;

export type TResponse<R, TParams> = Omit<Result<AxiosResponse<R>, [TParams]>, 'error' | 'run' | 'data'> & {
  data?: R;
  error?: AxiosError<R> | Error;
};
