'use client';

import { memo } from 'react';

import { useGetShortBasket, useGetUser, useGetUserLocation } from '@/appLayer/api/hooks';

import { useDeviceGeolocation, useRedirect } from '../../lib/hooks';

const DataLoading = () => {
  useGetUser();
  useGetShortBasket();
  useGetUserLocation();

  useRedirect();
  useDeviceGeolocation();

  return null;
};

export default memo(DataLoading);
