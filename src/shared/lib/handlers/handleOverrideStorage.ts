import { reduce } from 'lodash';

import { TStorage } from '@/shared/types';

import { config } from '../config';
import { getParsedStorage } from '../helpers';

export const handleOverrideStorage = (data: Partial<TStorage>) => {
  const appStorage = getParsedStorage();

  const mergedStorage = {
    ...appStorage,
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

  const newLocalState = JSON.stringify(newStorage);

  sessionStorage.setItem(config.storageKeyName, newLocalState);
};
