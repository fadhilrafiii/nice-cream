import localFont from 'next/font/local';

export const lobsterFont = localFont({
  src: [
    {
      path: '../../public/fonts/lobster/Lobster-Regular.ttf',
      weight: '400',
    },
  ],
  variable: '--font-lobster',
});

export const gilroyFont = localFont({
  src: [
    {
      path: '../../public/fonts/gilroy/Gilroy-Regular.ttf',
      weight: 'normal',
    },
    {
      path: '../../public/fonts/gilroy/Gilroy-Regular.ttf',
      weight: 'normal',
      style: 'italic',
    },
    {
      path: '../../public/fonts/gilroy/Gilroy-Regular.ttf',
      weight: 'normal',
    },
    {
      path: '../../public/fonts/gilroy/Gilroy-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/gilroy/Gilroy-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/gilroy/Gilroy-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../../public/fonts/gilroy/Gilroy-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/gilroy/Gilroy-Bold.ttf',
      weight: '700',
    },
    {
      path: '../../public/fonts/gilroy/Gilroy-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/gilroy/Gilroy-Black.ttf',
      weight: '900',
    },
    {
      path: '../../public/fonts/gilroy/Gilroy-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-gilroy',
});
