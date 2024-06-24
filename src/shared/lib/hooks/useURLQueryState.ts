'use client';

import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useSearchParams } from 'next/navigation';

import { useLngPushRouter, usePathnameWithoutLng } from '.';

export const useURLQueryState = (): [(path?: string, options?: NavigateOptions) => void, URLSearchParams] => {
  const [push] = useLngPushRouter();
  const pathname = usePathnameWithoutLng();
  const searchParams = useSearchParams();

  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));

  const handlePushQuery = (path?: string, options?: NavigateOptions) => {
    const search = queryParams.toString();
    const query = search ? `?${search}` : '';

    push(`${path || pathname}${query}`, { scroll: false, ...options });
  };

  const extendedQueryParams = {
    ...queryParams,
    set: (name: string, value: string) => {
      queryParams.set(name, value);
      handlePushQuery();
    },
  };

  return [handlePushQuery, extendedQueryParams];
};
