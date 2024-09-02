import {
  IUserProfile,
  IUserToken,
  IVerification,
  Maybe,
} from '@/shared/types';

type TAuthData = IUserToken & { expiredDate?: string; };

export interface IAuthStore {
  email: string;
  user: Maybe<IUserProfile>;
  authData?: Maybe<TAuthData>;
  isLoggedIn?: boolean;
  sendCodeOnMailRes: Maybe<IVerification>;
  isLoginWithPass?: boolean;
  isRegistrationRequired?: boolean;
}

export interface IAuthActions {
  setEmailAction: (email: string) => void;
  resetAuthStoreAction: () => void;
  setLoginWithPassAction: () => void;
  initUserSuccessAction: (data: IUserProfile) => void;
  setAuthDataSuccessAction: (data: IAuthStore['authData']) => void;
  sendCodeOnMailSuccessAction: (data: IAuthStore['sendCodeOnMailRes']) => void;
}
