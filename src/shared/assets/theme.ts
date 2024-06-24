'use client';

/* eslint-disable prefer-destructuring */
import { createTheme, Palette } from '@mui/material';

import { COLORS } from '@/shared/consts';

import { hendrixFont } from './font';

export const palette = createTheme({ palette: COLORS as unknown as Palette }).palette;
export const breakpoints = createTheme().breakpoints;

const options = {
  palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '100%',
          fontSize: 16,
          fontWeight: 500,
          boxShadow: 'none',
          borderRadius: '10px',
          textTransform: 'none' as const,
          ':disabled': {
            opacity: 0.6,
          },
          '&.Mui-disabled.MuiButton-containedPrimary': {
            background: palette.primary.main,
          },
          '&.Mui-disabled.MuiButton-containedSecondary': {
            background: palette.secondary.main,
          },
          '&.MuiButton-containedPrimary': {
            color: palette.text.white,
          },
          '&.MuiButton-containedSecondary': {
            color: palette.text.white,
          },
        },
        sizeLarge: {
          fontSize: 18,
        },
        sizeXLarge: {
          fontSize: 20,
          [breakpoints.down('sm')]: {
            fontSize: 18,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          background: palette.background.paper,
          '&.Mui-error': {
            background: palette.background.error,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: { shrink: true },
      },
    },
  },
  typography: {
    fontFamily: hendrixFont.style.fontFamily,
    body1: {
      color: '#272424',
      fontSize: 16,
      fontWeight: 400,
    },
  },
};

export const theme = createTheme(options);
