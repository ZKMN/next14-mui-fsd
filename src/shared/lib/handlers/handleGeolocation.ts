import { IGeoOptionsParams } from '@/shared/types';

import { errorMessage } from '../helpers';
import { setGeolocationSuccessAction } from '../store';

export const handleGeolocationError = (error: GeolocationPositionError) => {
  if (error.code === 1) {
    return errorMessage('You are not allowed geolocation detection in your browser.', { toastId: 'geo-error' });
  }

  return errorMessage(`ERROR(${error.code}): ${error.message}`, { toastId: 'geo-error' });
};

// https://devdreaming.com/blogs/how-to-get-user-location-in-react-js
export const handleGeolocation = (options?: IGeoOptionsParams) => {
  if (navigator.geolocation) {
    const naviOptions = {
      enableHighAccuracy: true,
      timeout: 150000,
      maximumAge: 150000,
    };

    const success = (pos: GeolocationPosition) => {
      options?.onSuccess?.(pos.coords);
      setGeolocationSuccessAction(pos.coords);
    };

    const errors = (error: GeolocationPositionError) => {
      if (options?.onError) {
        return options?.onError?.(error);
      }

      return handleGeolocationError(error);
    };

    (async () => {
      await navigator.permissions.query({ name: 'geolocation' });

      // navigator.geolocation.watchPosition(success, errors, naviOptions);
      navigator.geolocation.getCurrentPosition(success, errors, naviOptions);
    })();

    return;
  }

  errorMessage('Geolocation is not supported by this browser.');
};
