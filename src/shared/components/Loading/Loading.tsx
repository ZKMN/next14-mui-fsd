import React, { CSSProperties } from 'react';
import { Box, CircularProgress } from '@mui/material';

export const Loading = ({
  size,
  toTop,
  height,
  loading,
  toBottom,
  children,
  blurred,
}: React.PropsWithChildren<{
  toTop?: boolean;
  height?: CSSProperties['height'];
  loading: boolean; size?: 'small';
  blurred?: boolean;
  toBottom?: boolean;
}>) => {
  if (loading) {
    return (
      <>
        <Box
          sx={{
            width: '100%',
            height: height || 150,
            display: 'flex',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: blurred ? 'blur(3px)' : 'none',
            zIndex: 100,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              ...(toTop && { top: 100 }),
              ...(toBottom && { bottom: 0 }),
            }}
          >
            <CircularProgress size={size === 'small' ? '1.5rem' : '2.5rem'} />
          </Box>
        </Box>

        {children}
      </>
    );
  }

  return children;
};
