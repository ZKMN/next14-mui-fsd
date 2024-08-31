'use client';

import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useSearchParams } from 'next/navigation';

import { useLocalePushRouter, usePathnameWithoutLocale } from '.';

export const useURLQueryState = (): [
  (path?: string, options?: NavigateOptions) => void,
  URLSearchParams & { pushSet: URLSearchParams['set']; pushDelete: URLSearchParams['delete']; }
] => {
  const [push] = useLocalePushRouter();
  const pathname = usePathnameWithoutLocale();
  const searchParams = useSearchParams();

  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));

  const handlePushQuery = (path?: string, options?: NavigateOptions) => {
    const search = queryParams.toString();
    const query = search ? `?${search}` : '';

    push(`${path || pathname}${query}`, { scroll: false, ...options });
  };

  const extendedQueryParams = {
    pushSet: (name: string, value: string) => {
      queryParams.set(name, value);
      handlePushQuery();
    },
    pushDelete: (name: string, value?: string) => {
      queryParams.delete(name, value);
      handlePushQuery();
    },
  };

  const params = Object.assign(queryParams, extendedQueryParams);

  return [handlePushQuery, params];
};
