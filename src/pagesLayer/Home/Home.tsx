'use client';

import React from 'react';

import { useGetSWR } from '@/shared/api/hooks';

export const Home = () => {
  useGetSWR({ url: '/blogs', queryParams: { populate: '*' } });

  return (
    <div>Home</div>
  );
};
