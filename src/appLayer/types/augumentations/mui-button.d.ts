import '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    baseGrey: true;
    baseBlack: true;
  }

  interface ButtonPropsSizeOverrides {
    xLarge: true;
  }
}
