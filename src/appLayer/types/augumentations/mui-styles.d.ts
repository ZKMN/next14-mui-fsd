import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    border: Palette['primary'];
    baseGrey: Palette['primary'];
    baseBlack: Palette['primary'];
  }

  interface PaletteOptions {
    border: Palette['primary'];
    baseGrey: Palette['primary'];
    baseBlack: Palette['primary'];
  }

  interface TypeBackground {
    cyan: TypeBackground['default'];
    error: TypeBackground['default'];
    primary: TypeBackground['default'];
    secondary: TypeBackground['default'];
  }

  interface TypeText {
    grey: TypeText['primary'];
    white: TypeText['primary'];
    green: TypeText['primary'];
    black: TypeText['primary'];
  }
}
