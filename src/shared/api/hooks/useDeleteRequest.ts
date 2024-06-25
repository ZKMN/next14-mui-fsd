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

import { apiDelete } from '../instance';

export const useDeleteRequest = <R>(options?: IAPIHookOptions<R, IAPIRequestParams>): [
  request: TRequestCallback,
  response: TResponse<R, IAPIRequestParams>
] => {
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
  } = useRequest<AxiosResponse<R>, [IAPIRequestParams]>(
    apiDelete,
    { ...config, manual: true },
  );

  const handleDeleteRequest = useCallback((params?: Omit<IRequestCallbackParams, 'payload'>) => {
    const { callbackQueryParams, callbackURL } = params || {};

    const urlWithParams = getURLWithQueryParams(String(callbackURL || url), callbackQueryParams || queryParams);

    run({
      url: `${urlWithParams}`,
      baseURL,
      withCredentials,
    });
  }, [url]);

  return [
    handleDeleteRequest,
    {
      ...rest,
      data: data?.data,
    },
  ];
};
