import { AxiosError } from 'axios';
import useSWR, { Fetcher } from 'swr';

import { getURLWithQueryParams } from '@/shared/lib/helpers';
import { IAPIHookOptions } from '@/shared/types';

import { apiGet } from '../instance';

export const useGetSWR = <R>({
  url,
  config,
  headers,
  baseURL,
  queryParams,
  withCredentials,
}: IAPIHookOptions<R>) => {
  const fetcher: Fetcher<R, string> = async (u) => {
    const { data } = await apiGet<R>({
      url: u,
      baseURL,
      headers,
      withCredentials,
    });

    return data;
  };

  const urlWithParams = getURLWithQueryParams(url, queryParams);

  const response = useSWR<R, AxiosError>(urlWithParams, fetcher, { ...config, revalidateOnFocus: false });

  return response;
};
