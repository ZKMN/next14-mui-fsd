import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    border: Palette['primary'];
    baseGrey: Palette['primary'];
    baseBlack: Palette['primary'];
  }

  interface PaletteOptions {
    baseGrey: Palette['primary'];
    baseBlack: Palette['primary'];
  }

  interface TypeText {
    grey: TypeText['primary'];
    white: TypeText['primary'];
    green: TypeText['primary'];
    black: TypeText['primary'];
  }

  interface TypeBackground {
    pink: TypeText['primary'];
    black: TypeText['primary'];
    error: TypeBackground['default'];
  }
}
