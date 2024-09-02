import { Observable, ServerError } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import dayjs from 'dayjs';

import { handleLogout } from '@/shared/lib/handlers';
import { getParsedStorage } from '@/shared/lib/helpers';

import { getRefreshedToken } from './getRefreshedToken';

export const headersLink = setContext(({ operationName }, { headers }) => {
  const publicOperations = [
    'Product',
    'Location',
    'Locations',
    'UserExist',
    'PostalCode',
    'Categories',
    'LoginByCode',
    'RefreshToken',
    'ProductShort',
    'LocationPins',
    'ResetPassword',
    'HomeCategories',
    'ProductNutrition',
    'LoginWithPassword',
    'LoginWithProvider',
    'SendVerificationCode',
    'SendResetPasswordLink',
    'CreateUserWithPassword',
  ];

  // also public but token comes from context -> headers
  const withTokenFromHeaders = [
    'UserProfile',
    'UpdateUserProfile',
  ];

  const isPublic = publicOperations.includes(String(operationName)) || withTokenFromHeaders.includes(String(operationName));
  // get the authentication token from local storage if it exists
  const appStorage = getParsedStorage();
  const expDate = appStorage?.authData?.expiredDate;

  const isExpired = expDate && (dayjs().isSame(expDate, 'day') || dayjs().isAfter(expDate, 'day'));

  if (isExpired) {
    handleLogout();

    return headers;
  }

  if (isPublic) {
    return headers;
  }

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${appStorage?.authData?.idToken}`,
    },
  };
});

export const refreshTokenLink = onError(({ networkError, operation, forward }) => {
  const serverError = networkError as ServerError;
  const is401Error = serverError?.statusCode === 401;

  if (is401Error) {
    return new Observable((observer) => {
      (async () => {
        try {
          const newToken = await getRefreshedToken();

          const oldHeaders = operation.getContext().headers;

          operation.setContext({
            headers: {
              ...oldHeaders,
              authorization: `Bearer ${newToken}`,
            },
          });

          const subscriber = {
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          };

          // Retry last failed request
          forward(operation).subscribe(subscriber);
        } catch (error) {
          observer.error(error);
        }
      })();
    });
  }

  return undefined;
});
