import { IAppSettingsStore, IAuthStore } from './store';

export type TStorage = { authData?: IAuthStore['authData']; } & IAppSettingsStore;
