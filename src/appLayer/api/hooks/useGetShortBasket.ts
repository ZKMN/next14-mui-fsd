'use client';

import { useQuery } from '@apollo/client';

// import { useAddProducts, useUpdateBasket } from '@/shared/api/hooks';
// import { errorMessage, getParsedError } from '@/shared/lib/helpers';
// import { usePathnameWithoutLocale } from '@/shared/lib/hooks';
// import {
//   appAuthStore,
//   appSettingsStore,
//   basketStore,
//   initBasketSuccessAction,
//   resetUnAuthProductsAction,
//   setHandoffModeAction,
//   setUserLocationAction,
// } from '@/shared/lib/store';
// import { IHandoffMode, IQuery, Links } from '@/shared/types';
import { CalculateBasketShortQuery } from '../operations';

export const useGetShortBasket = () => {
  // const basket = basketStore((state) => state.basket);
  // const isLoggedIn = appAuthStore((state) => state.isLoggedIn);

  // const handoffMode = appSettingsStore((state) => state.handoffMode);
  // const unAuthProducts = appSettingsStore((state) => state.unAuthProducts);
  // const storedLocationId = appSettingsStore((state) => state.storedLocation?.id);

  // const pathname = usePathnameWithoutLocale();

  // const [handleAddProducts] = useAddProducts({ onSuccess: resetUnAuthProductsAction });
  // const [handleUpdateBasket] = useUpdateBasket({ onSuccess: unAuthProducts ? handleAddProducts(unAuthProducts) : undefined });

  // const isCheckoutScreen = pathname.includes(Links.CHECKOUT);

  useQuery(CalculateBasketShortQuery, {
    // skip: !isLoggedIn || !!basket || isCheckoutScreen,
    fetchPolicy: 'no-cache',
    // onError: (err) => {
    //   const error = getParsedError(err);

    //   // CODE E054 - location not selected
    //   if (error.code === 'E054' && storedLocationId) {
    //     return handleUpdateBasket({ handoffMode: IHandoffMode.PICKUP, locationId: storedLocationId });
    //   }

    //   return errorMessage(error.message);
    // },
    // onCompleted: ({ calculateBasket }) => {
    //   initBasketSuccessAction(calculateBasket);

    //   if (calculateBasket.handoffMode !== handoffMode) {
    //     setHandoffModeAction(calculateBasket.handoffMode);
    //   }

    //   if (storedLocationId && storedLocationId === calculateBasket.locationId && unAuthProducts?.length) {
    //     return handleAddProducts(unAuthProducts)();
    //   }

    //   if (storedLocationId && storedLocationId !== calculateBasket.locationId && unAuthProducts?.length) {
    //     return handleUpdateBasket({ handoffMode: IHandoffMode.PICKUP, locationId: storedLocationId });
    //   }

    //   if (storedLocationId !== calculateBasket.locationId) {
    //     return setUserLocationAction({ id: calculateBasket.locationId });
    //   }

    //   return null;
    // },
  });
};
