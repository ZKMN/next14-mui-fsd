'use client';

import React, { PropsWithChildren } from 'react';
import { Container, ContainerProps } from '@mui/material';

import { breakpoints } from '@/shared/assets';

type BaseContainerProps = Omit<ContainerProps, 'maxWidth'> & { mt?: number; mb?: number; maxWidth?: number; height?: string; };

export const BaseContainer = ({
  sx,
  mt,
  mb,
  height,
  maxWidth,
  children,
  disableGutters,
}: PropsWithChildren<BaseContainerProps>) => (
  <Container
    fixed={false}
    maxWidth={false}
    disableGutters={disableGutters}
    sx={{
      mt,
      mb,
      height: height || '100%',
      maxWidth: maxWidth || 1366,
      [breakpoints.up('xl')]: {
        maxWidth: maxWidth || 1500,
        padding: 0,
      },
      ...sx,
    }}
  >
    {children}
  </Container>
);
