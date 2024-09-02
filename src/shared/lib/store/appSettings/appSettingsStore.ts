import { create } from 'zustand';

import { getParsedStorage } from '@/shared/lib/helpers';
import { IAppSettingsStore } from '@/shared/types';

export const appSettingsStoreValues: Readonly<IAppSettingsStore> = {
  allergens: null,
  handoffMode: '',
  geolocation: null,
  storedLocation: undefined,
  unAuthProducts: null,
  isGeoMessageShown: false,
  isFarawayConfirmed: false,
};

export const appSettingsStore = create<IAppSettingsStore>()(() => {
  const storage = getParsedStorage();
  const storageSession = getParsedStorage('session');

  return {
    ...appSettingsStoreValues,
    allergens: storage?.allergens,
    storedLocation: storage?.storedLocation,
    unAuthProducts: storage?.unAuthProducts || [],
    isGeoMessageShown: !!storageSession?.isGeoMessageShown,
  };
});
