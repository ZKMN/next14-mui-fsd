import '@mui/material/TextField';

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    default: true;
  }
}
