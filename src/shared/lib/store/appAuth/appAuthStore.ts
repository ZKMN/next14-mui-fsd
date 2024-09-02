import { create } from 'zustand';

import { getParsedStorage } from '@/shared/lib/helpers';
import { IAuthStore } from '@/shared/types';

export const appAuthStoreValues: Readonly<IAuthStore> = {
  user: null,
  email: '',
  authData: undefined,
  isLoggedIn: false,
  isLoginWithPass: false,
  sendCodeOnMailRes: null,
  isRegistrationRequired: false,
};

export const appAuthStore = create<IAuthStore>()(() => {
  const storage = getParsedStorage();

  return {
    ...appAuthStoreValues,
    authData: storage?.authData,
  };
});
