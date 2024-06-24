import { useCallback } from 'react';
import { useRequest } from 'ahooks';
import { AxiosResponse } from 'axios';

import { getURLWithQueryParams } from '@/shared/lib/helpers';
import { useTypedParams } from '@/shared/lib/hooks';
import {
  IAPIHookOptions,
  IAPIRequestParams,
  IRequestCallbackParams,
  TRequestCallback,
  TResponse,
} from '@/shared/types';

import { apiPut } from '../instance';

export const usePutRequest = <R, P = undefined>(options?: IAPIHookOptions<R, IAPIRequestParams<P>>): [
  request: TRequestCallback<P>,
  response: TResponse<R, IAPIRequestParams<P>>
] => {
  const { locale } = useTypedParams();

  const {
    url,
    config,
    baseURL,
    queryParams,
    withCredentials,
  } = options || {};

  const {
    run,
    data,
    ...rest
  } = useRequest<AxiosResponse<R, P>, [IAPIRequestParams<P>]>(
    apiPut,
    { ...config, manual: true },
  );

  const handlePutRequest = useCallback((params?: IRequestCallbackParams<P>) => {
    const { payload, callbackQueryParams, callbackURL } = params || {};

    const urlWithParams = getURLWithQueryParams(String(callbackURL || url), callbackQueryParams || queryParams);

    run({
      url: `${locale}/v1${urlWithParams}/`,
      payload,
      baseURL,
      withCredentials,
    });
  }, [url]);

  return [
    handlePutRequest,
    {
      ...rest,
      data: data?.data,
    },
  ];
};
