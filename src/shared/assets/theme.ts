'use client';

/* eslint-disable prefer-destructuring */
import { createTheme, lighten, Palette } from '@mui/material';
import { Montserrat } from 'next/font/google';

import { COLORS } from '@/shared/consts';

const montserrat = Montserrat({ subsets: ['latin'], style: 'normal' });

export const palette = createTheme({ palette: COLORS as unknown as Palette }).palette;
export const breakpoints = createTheme().breakpoints;

const options = {
  palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: '8px',
          textTransform: 'none' as const,
          '&.Mui-disabled.MuiButton-containedPrimary': {
            background: lighten(palette.primary.main, 0.3),
          },
          '&.Mui-disabled.MuiButton-containedSecondary': {
            background: lighten(palette.secondary.main, 0.3),
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
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontFamily: montserrat.style.fontFamily,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          background: palette.background.paper,
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
    allVariants: {
      color: palette.text.primary,
      fontSize: '1rem',
      fontWeight: 500,
      fontFamily: montserrat.style.fontFamily,
    },
  },
};

export const theme = createTheme(options);
