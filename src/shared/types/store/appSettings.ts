import {
  IAllergen,
  IBasketProductPayload,
  IHandoffMode,
  ILocation,
  Maybe,
} from '..';

export interface IAppSettingsStore {
  allergens?: Maybe<IAllergen[]>;
  handoffMode: IHandoffMode;
  geolocation?: Maybe<GeolocationCoordinates>;
  storedLocation?: Pick<ILocation, 'id'>;
  unAuthProducts: Maybe<IBasketProductPayload[]>;
  isGeoMessageShown: boolean;
  isFarawayConfirmed: boolean;
}

export interface IAppSettingsStoreActions {
  setAllergensAction: (data: Maybe<IAllergen[]>) => void;
  setHandoffModeAction: (data: IHandoffMode) => void;
  setUserLocationAction: (data: IAppSettingsStore['storedLocation']) => void;
  addUnAuthProductsAction: (data: IBasketProductPayload[]) => void;
  resetUnAuthProductsAction: () => void;
  setFarawayConfirmedAction: () => void;
  setGeolocationMessageAction: () => void;
  setGeolocationSuccessAction: (data: GeolocationCoordinates) => void;
}
