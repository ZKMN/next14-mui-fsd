import { config } from '@/shared/lib/config';

export const handleLogout = () => {
  localStorage.removeItem(config.storageKeyName);
  window.location.reload();
};
