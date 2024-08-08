import { useCallback } from 'react';
import { useRequest } from 'ahooks';
import { AxiosResponse } from 'axios';

import { getURLWithQueryParams } from '@/shared/lib/helpers';
import {
  IAPIHookOptions,
  IAPIRequestParams,
  IRequestCallbackParams,
  TRequestCallback,
  TResponse,
} from '@/shared/types';

import { apiPost } from '../instance';

export const usePostRequest = <R, P = undefined>(options?: IAPIHookOptions<R, IAPIRequestParams<P>>): [
  request: TRequestCallback<P>,
  response: TResponse<R, IAPIRequestParams<P>>
] => {
  const {
    url,
    config,
    baseURL,
    headers,
    queryParams,
    withCredentials,
  } = options || {};

  const {
    run,
    data,
    ...rest
  } = useRequest<AxiosResponse<R, P>, [IAPIRequestParams<P>]>(
    apiPost,
    { ...config, manual: true },
  );

  const handlePostRequest = useCallback((params?: IRequestCallbackParams<P>) => {
    const { payload, callbackQueryParams, callbackURL } = params || {};

    const urlWithParams = getURLWithQueryParams(String(callbackURL || url), callbackQueryParams || queryParams);

    run({
      url: `${urlWithParams}`,
      payload,
      baseURL,
      headers,
      withCredentials,
    });
  }, [url]);

  return [
    handlePostRequest,
    {
      ...rest,
      data: data?.data,
    },
  ];
};
