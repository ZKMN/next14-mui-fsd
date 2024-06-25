import { AxiosError } from 'axios';
import useSWR, { Fetcher } from 'swr';

import { getURLWithQueryParams } from '@/shared/lib/helpers';
import { useTypedParams } from '@/shared/lib/hooks';
import { IAPIHookOptions } from '@/shared/types';

import { apiGet } from '../instance';

export const useGetSWR = <R>({
  url,
  config,
  queryParams,
  withCredentials,
}: IAPIHookOptions<R>) => {
  const { locale } = useTypedParams();

  const fetcher: Fetcher<R, string> = async (u) => {
    const { data } = await apiGet<R>({ url: u, withCredentials });

    return data;
  };

  const urlWithParams = getURLWithQueryParams(`${url}`, { ...queryParams, locale });

  const response = useSWR<R, AxiosError>(urlWithParams, fetcher, { ...config, revalidateOnFocus: false });

  return response;
};
