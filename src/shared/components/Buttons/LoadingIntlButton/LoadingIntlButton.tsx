import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';

import { useClientTranslation } from '@/shared/lib/hooks';
import { IIntlProps } from '@/shared/types';

export const LoadingIntlButton = ({
  sx,
  size,
  intl,
  color = 'primary',
  variant = 'contained',
  loading,
  disabled,
  children,
  onClick,
}: ButtonProps & Partial<IIntlProps> & { loading?: boolean; }) => {
  const [translate] = useClientTranslation('buttons');

  return (
    <Button
      sx={sx}
      size={size}
      color={color}
      variant={variant}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading && (
        <CircularProgress
          sx={{ position: 'absolute', color: color === 'primary' ? 'text.white' : '' }}
          size={20}
        />
      )}
      <span style={{ visibility: loading ? 'hidden' : 'initial', width: '100%' }}>
        {intl ? translate(intl.label, intl.values) : children}
      </span>
    </Button>
  );
};
