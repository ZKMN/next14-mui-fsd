import { useQuery } from '@apollo/client';

import { handleGraphErrorMessage } from '@/shared/lib/handlers';
import { appSettingsStore } from '@/shared/lib/store';

// import { IQuery, IQueryGetLocationArgs } from '@/shared/types';
import { LocationQuery } from '../operations';

export const useGetUserLocation = () => {
  const geolocation = appSettingsStore((state) => state.geolocation);
  const storedLocationId = appSettingsStore((state) => state.storedLocation?.id);

  useQuery(LocationQuery, {
    skip: !storedLocationId,
    fetchPolicy: 'no-cache',
    variables: {
      id: String(storedLocationId),
      distanceFrom: geolocation ? {
        latitude: geolocation.latitude,
        longitude: geolocation.longitude,
      } : undefined,
    },
    onError: (error) => handleGraphErrorMessage(error),
    // onCompleted: ({ getLocation }) => {
    //   initLocationSuccessAction(getLocation);

    //   if (!storedLocationId) {
    //     setUserLocationAction({ id: getLocation.id });
    //   }
    // },
  });
};
