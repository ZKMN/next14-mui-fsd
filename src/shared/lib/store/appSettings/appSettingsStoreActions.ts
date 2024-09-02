import { IAppSettingsStoreActions } from '@/shared/types';

import { appSettingsStore } from '.';

import { handleOverrideLocalStorage, handleOverrideSessionStorage } from '../../handlers';

export const setAllergensAction: IAppSettingsStoreActions['setAllergensAction'] = (allergens) => {
  handleOverrideLocalStorage({ allergens });

  appSettingsStore.setState({ allergens });
};

export const setUserLocationAction: IAppSettingsStoreActions['setUserLocationAction'] = (storedLocation) => {
  handleOverrideLocalStorage({ storedLocation });

  appSettingsStore.setState({ storedLocation });
};

export const setHandoffModeAction: IAppSettingsStoreActions['setHandoffModeAction'] = (handoffMode) => {
  appSettingsStore.setState({ handoffMode });
};

export const setGeolocationSuccessAction: IAppSettingsStoreActions['setGeolocationSuccessAction'] = (geolocation) => {
  appSettingsStore.setState({ geolocation });
};

export const setFarawayConfirmedAction: IAppSettingsStoreActions['setFarawayConfirmedAction'] = () => {
  appSettingsStore.setState({ isFarawayConfirmed: true });
};

export const setGeolocationMessageAction: IAppSettingsStoreActions['setGeolocationMessageAction'] = () => {
  handleOverrideSessionStorage({ isGeoMessageShown: true });

  appSettingsStore.setState({ isGeoMessageShown: true });
};

export const resetUnAuthProductsAction: IAppSettingsStoreActions['resetUnAuthProductsAction'] = () => {
  handleOverrideLocalStorage({ unAuthProducts: null });

  appSettingsStore.setState({ unAuthProducts: null });
};

export const addUnAuthProductsAction: IAppSettingsStoreActions['addUnAuthProductsAction'] = (products) => {
  appSettingsStore.setState((state) => {
    let unAuthProducts = state.unAuthProducts || [];

    if (products) {
      unAuthProducts = [...unAuthProducts, ...products];
    }

    handleOverrideLocalStorage({ unAuthProducts });

    return { unAuthProducts: [...unAuthProducts] };
  });
};
