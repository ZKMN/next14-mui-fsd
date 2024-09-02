import { useQuery } from '@apollo/client';

import { useURLQueryState } from '@/shared/lib/hooks';
import { appAuthStore, initUserSuccessAction } from '@/shared/lib/store';

// import { IQuery } from '@/shared/types';
import { GetUserProfileQuery } from '../operations';

export const useGetUser = () => {
  const user = appAuthStore((state) => state.user);
  const authData = appAuthStore((state) => state.authData);

  const [, queryParams] = useURLQueryState();

  useQuery(GetUserProfileQuery, {
    skip: !authData || !!user,
    fetchPolicy: 'no-cache',
    context: {
      headers: {
        authorization: `Bearer ${authData?.idToken}`,
      },
    },
    onError: () => {
      queryParams.pushDelete('profile-loading');
    },
    onCompleted: ({ getUserProfile }) => {
      initUserSuccessAction(getUserProfile);

      queryParams.pushDelete('profile-loading');
    },
  });
};
