import { TStorage } from '@/shared/types';

import { config } from '../config';
import { getNewStorageState, getParsedStorage } from '../helpers';

export const handleOverrideLocalStorage = (data: Partial<TStorage>) => {
  const appStorage = getParsedStorage();

  const newLocalState = getNewStorageState(appStorage, data);

  localStorage.setItem(config.storageKeyName, newLocalState);
};

export const handleOverrideSessionStorage = (data: Partial<TStorage>) => {
  const appStorage = getParsedStorage('session');

  const newLocalState = getNewStorageState(appStorage, data);

  sessionStorage.setItem(config.storageKeyName, newLocalState);
};
