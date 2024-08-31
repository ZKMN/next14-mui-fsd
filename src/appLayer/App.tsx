import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import '../shared/styles/globals.scss';

export const App = ({ children }: React.PropsWithChildren) => (
  <AppRouterCacheProvider>
    <Header />

    <main>{children}</main>

    <Footer />
  </AppRouterCacheProvider>
);
