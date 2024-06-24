'use client';

import { ThemeProvider } from '@mui/material';

import { theme } from '@/shared/assets';

export const MUIThemeProvider = ({ children }: React.PropsWithChildren) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
