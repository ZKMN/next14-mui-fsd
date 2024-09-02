import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { usePathnameWithoutLocale, useTypedParams } from '@/shared/lib/hooks';
import { appAuthStore } from '@/shared/lib/store';
import { Links } from '@/shared/types';

export const useRedirect = () => {
  const isLoggedIn = appAuthStore((state) => state.isLoggedIn);
  const isRegistrationRequired = appAuthStore((state) => state.isRegistrationRequired);

  const { locale } = useTypedParams();
  const { replace } = useRouter();
  const pathname = usePathnameWithoutLocale();

  useEffect(() => {
    const publicRoutes: Links[] = [
      Links.SIGN_IN,
    ];

    const isLogged = isLoggedIn && publicRoutes.includes(pathname as Links);

    if (isLogged && !isRegistrationRequired) {
      replace(`/${locale}`);
    }
  }, [pathname, isRegistrationRequired, isLoggedIn]);
};
