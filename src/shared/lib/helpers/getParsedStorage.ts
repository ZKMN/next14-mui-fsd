import { reduce } from 'lodash';

import { TStorage } from '@/shared/types';

import { config } from '../config';

export const getParsedStorage = (type?: 'session'): TStorage | null => {
  if (typeof window !== 'undefined') {
    const storageType = type === 'session' ? sessionStorage : localStorage;

    const appState = storageType.getItem(config.storageKeyName);

    const parsedAppState: TStorage = appState && JSON.parse(appState);

    return parsedAppState || {};
  }

  return null;
};

export const getNewStorageState = (initialValues: TStorage | null, data: Partial<TStorage>) => {
  const mergedStorage = {
    ...initialValues,
    ...data,
  };

  const newStorage = reduce(
    mergedStorage,
    (acc, value, key) => {
      const k = key as keyof TStorage;

      if (acc && !value) {
        delete acc[k];
      }

      return acc;
    },
    mergedStorage,
  );

  const state = JSON.stringify(newStorage);

  return state;
};
