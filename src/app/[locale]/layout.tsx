import { Grid } from '@mui/material';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { dir } from 'i18next';
import Script from 'next/script';

import { App } from '@/appLayer/App';
import { MUIThemeProvider } from '@/appLayer/providers';

import { LANGUAGES } from '@/shared/consts';
import { config } from '@/shared/lib/config';
import { INextPageParams } from '@/shared/types';

export async function generateStaticParams() {
  return LANGUAGES.map((locale) => ({ locale }));
}

const RootLayout = ({ children, params: { locale } }: React.PropsWithChildren<INextPageParams>) => (
  <MUIThemeProvider>
    <Grid component="html" lang={locale} dir={dir(locale)}>
      <Grid component="body">

        <SpeedInsights />

        <App>
          {children}
        </App>

        {/* Clickjacking attack def */}
        <Script id="clickjack">
          {`
            function isInFrame() {
              try {
                return window.self !== window.top;
              } catch (e) {
                return true;
              }
            }
            
            // Sanitize the href value to prevent open redirection attacks
            function isCorrectURL(url) {
              const regex = /^(https?):\\/\\/[^\\s$.?#].[^\\s]*$/i;
              const correctURL = regex.test(url) ? url : null;
      
              // Encode any untrusted data in the URL
              if (correctURL && correctURL.startsWith("${config.urls.site}")) {
                return encodeURIComponent(correctURL);
              }
      
              return "${config.urls.site}";
            }
            
            // If the current window is in a frame, redirect to the sanitized URL
            if (isInFrame()) {
              const href = document.querySelector("a").getAttribute("href");
              const correctURL = isCorrectURL(href);
      
              window.top.location.replace(correctURL);
            }
      
            // Framebusting script to prevent clickjacking attacks
            if (window.self !== window.top) {
              const correctURL = isCorrectURL(window.location.href);
              
              window.top.location.replace(correctURL);
            }
          `}
        </Script>
      </Grid>
    </Grid>
  </MUIThemeProvider>
);

export default RootLayout;
