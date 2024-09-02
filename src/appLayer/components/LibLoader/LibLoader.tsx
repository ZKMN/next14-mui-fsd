'use client';

import { useEffect } from 'react';
import dayjs from 'dayjs';

import { useTypedParams } from '@/shared/lib/hooks';

import 'dayjs/locale/fr';

export const LibLoader = () => {
  const { lng } = useTypedParams();

  useEffect(() => {
    dayjs.locale(lng);
  }, [lng]);

  return null;
};
