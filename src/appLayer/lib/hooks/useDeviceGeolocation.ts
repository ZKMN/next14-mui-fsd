import { useEffect } from 'react';

import { handleGeolocation, handleGeolocationError } from '@/shared/lib/handlers';
import { appSettingsStore, setGeolocationMessageAction } from '@/shared/lib/store';

// https://devdreaming.com/blogs/how-to-get-user-location-in-react-js
export const useDeviceGeolocation = () => {
  const geolocation = appSettingsStore((state) => state.geolocation);
  const storedLocationId = appSettingsStore((state) => state.storedLocation?.id);
  const isGeoMessageShown = appSettingsStore((state) => state.isGeoMessageShown);

  useEffect(() => {
    if (navigator.geolocation && !geolocation) {
      const onError = (error: GeolocationPositionError) => {
        if (storedLocationId || isGeoMessageShown) {
          return null;
        }

        return handleGeolocationError(error);
      };

      const handler = () => {
        setGeolocationMessageAction();
        handleGeolocation({ onError });
      };

      const EVENTS = ['mousemove', 'mousedown', 'keydown', 'scroll'];

      EVENTS.forEach((event) => {
        window.addEventListener(event, handler);
      });

      return () => {
        EVENTS.forEach((event) => {
          window.removeEventListener(event, handler);
        });
      };
    }

    return undefined;
  }, [isGeoMessageShown, storedLocationId, geolocation?.latitude, geolocation?.longitude]);
};
