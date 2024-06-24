import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { MUIThemeProvider } from '@/appLayer/providers';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import '../shared/styles/globals.scss';

export const App = ({ children }: React.PropsWithChildren) => (
  <AppRouterCacheProvider>
    <MUIThemeProvider>

      <Header />

      <main>{children}</main>

      <Footer />
    </MUIThemeProvider>
  </AppRouterCacheProvider>
);
