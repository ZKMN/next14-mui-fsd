import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { MUIThemeProvider } from '@/appLayer/providers';

import '../shared/styles/globals.scss';

export const App = ({ children }: React.PropsWithChildren) => (
  <AppRouterCacheProvider>
    <MUIThemeProvider>
      {children}
    </MUIThemeProvider>
  </AppRouterCacheProvider>
);
