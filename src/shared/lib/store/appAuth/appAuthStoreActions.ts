import dayjs from 'dayjs';

import { IAuthActions, IAuthStore } from '@/shared/types';

import { appAuthStore } from './appAuthStore';

import { handleOverrideLocalStorage } from '../../handlers';

export const setEmailAction: IAuthActions['setEmailAction'] = (email) => {
  appAuthStore.setState({ email });
};

export const setAuthDataSuccessAction: IAuthActions['setAuthDataSuccessAction'] = (authData) => {
  appAuthStore.setState({ authData });
};

export const initUserSuccessAction: IAuthActions['initUserSuccessAction'] = (user) => {
  const { postalCode, firstName } = user;

  if (!postalCode && !firstName) {
    return appAuthStore.setState({ user, isRegistrationRequired: true });
  }

  return appAuthStore.setState((state) => {
    const expiredDate = state.authData?.expiredDate || dayjs().add(30, 'days').format('MM/DD/YYYY');

    const newAuthData = { ...state.authData, expiredDate } as IAuthStore['authData'];

    handleOverrideLocalStorage({ authData: newAuthData });

    return {
      user,
      email: '',
      authData: newAuthData,
      isLoggedIn: true,
      sendCodeOnMailRes: null,
      isRegistrationRequired: false,
    };
  });
};

export const sendCodeOnMailSuccessAction: IAuthActions['sendCodeOnMailSuccessAction'] = (data) => {
  appAuthStore.setState({ sendCodeOnMailRes: data });
};

export const setLoginWithPassAction: IAuthActions['setLoginWithPassAction'] = () => {
  appAuthStore.setState({
    isLoginWithPass: true,
    sendCodeOnMailRes: null,
  });
};

export const resetAuthStoreAction: IAuthActions['resetAuthStoreAction'] = () => {
  appAuthStore.setState({
    user: null,
    authData: null,
    isLoginWithPass: false,
    sendCodeOnMailRes: null,
    isRegistrationRequired: false,
  });
};
