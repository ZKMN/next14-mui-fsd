import localFont from 'next/font/local';

export const hendrixFont = localFont({
  src: [
    {
      path: '/br-hendrix-font/BRHendrix-Regular-BF6556d1b5096f9.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/br-hendrix-font/BRHendrix-Medium-BF6556d1b4e12b2.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/br-hendrix-font/BRHendrix-Bold-BF6556d1b5459d3.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});
