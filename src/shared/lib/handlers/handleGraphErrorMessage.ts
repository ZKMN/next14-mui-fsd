import { ToastOptions } from 'react-toastify';
import { ApolloError } from '@apollo/client';

import { errorMessage, getParsedError } from '../helpers';

export const handleGraphErrorMessage = (error?: ApolloError, options?: ToastOptions) => {
  const { message } = getParsedError(error);

  errorMessage(message, options);
};
