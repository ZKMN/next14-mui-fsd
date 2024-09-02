import { RefreshTokenQuery } from '@/appLayer/api/operations';

import { getParsedStorage } from '@/shared/lib/helpers';
import { setAuthDataSuccessAction } from '@/shared/lib/store';

// import { IUserToken } from '@/shared/types';
import { makeApolloClient } from '../client';

export const getRefreshedToken = async () => {
  try {
    const client = makeApolloClient();
    const appStorage = getParsedStorage();

    // { data: { refreshToken: IUserToken; }; }
    const { data } = await client.query({
      query: RefreshTokenQuery,
      variables: { token: appStorage?.authData?.refreshToken },
      fetchPolicy: 'no-cache',
    });

    setAuthDataSuccessAction(data.refreshToken);

    return data.refreshToken.idToken;
  } catch (error) {
    console.warn(error);
  }

  return null;
};
