'use client';

import { AppBar } from '@mui/material';

import { BaseContainer } from '@/shared/components';

export const Header = () => (
  <AppBar
    color="inherit"
    position="sticky"
    component="header"
    elevation={1}
  >
    <BaseContainer>
      Header
    </BaseContainer>
  </AppBar>
);
