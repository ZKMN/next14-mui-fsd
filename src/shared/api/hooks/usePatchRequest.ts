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

import { apiPatch } from '../instance';

export const usePatchRequest = <R, P = undefined>(options?: IAPIHookOptions<R, IAPIRequestParams<P>>): [
  request: TRequestCallback<P>,
  response: TResponse<R, IAPIRequestParams<P>>
] => {
  const { lng } = useTypedParams();

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
    apiPatch,
    { ...config, manual: true },
  );

  const handlePatchRequest = useCallback((params?: IRequestCallbackParams<P>) => {
    const { payload, callbackQueryParams, callbackURL } = params || {};

    const urlWithParams = getURLWithQueryParams(String(callbackURL || url), callbackQueryParams || queryParams);

    run({
      url: `${lng}/v1${urlWithParams}/`,
      payload,
      baseURL,
      withCredentials,
    });
  }, [url]);

  return [
    handlePatchRequest,
    {
      ...rest,
      data: data?.data,
    },
  ];
};
