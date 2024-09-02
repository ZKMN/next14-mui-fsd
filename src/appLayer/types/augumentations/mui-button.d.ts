import '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    baseBlack: true;
  }

  interface ButtonPropsSizeOverrides {
    xLarge: true;
  }
}
