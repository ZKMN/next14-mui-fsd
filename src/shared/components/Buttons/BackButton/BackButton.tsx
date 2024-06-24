import React from 'react';
import { ArrowBackIos } from '@mui/icons-material';
import { ButtonProps } from '@mui/material';

import { IntlButton } from '../..';

export const BackButton = ({ onClick, label }: ButtonProps & { label?: string; }) => (
  <IntlButton
    sx={{ p: '10px 15px', fontWeight: 700 }}
    size="large"
    intl={{ label: label || 'back' }}
    color="baseBlack"
    variant="text"
    onClick={onClick}
    startIcon={<ArrowBackIos />}
  />
);
