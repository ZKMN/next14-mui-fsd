import { toast, ToastOptions } from 'react-toastify';
import { Check, Error } from '@mui/icons-material';

export const successMessage = (message: string, options?: ToastOptions) => toast.success(message, {
  icon: <Check />,
  ...options,
});

export const errorMessage = (message: string, options?: ToastOptions) => toast.error(message, {
  icon: <Error />,
  ...options,
});
