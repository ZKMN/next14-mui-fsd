/* eslint-disable max-len */
import { SpeedInsights } from '@vercel/speed-insights/next';
import { dir } from 'i18next';
import Script from 'next/script';

import { App } from '@/appLayer/App';

import { hendrixFont } from '@/shared/assets/font';
import { LANGUAGES } from '@/shared/consts';
import { INextPageParams } from '@/shared/types';

export async function generateStaticParams() {
  return LANGUAGES.map((lng) => ({ lng }));
}

const RootLayout = ({ children, params: { lng } }: React.PropsWithChildren<INextPageParams>) => (
  <html lang={lng} dir={dir(lng)}>
    <body className={hendrixFont.className}>

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
            if (correctURL && correctURL.startsWith("https://weestep-kids.es/")) {
              return encodeURIComponent(correctURL);
            }
    
            return "https://weestep-kids.es/";
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
    </body>
  </html>
);

export default RootLayout;
