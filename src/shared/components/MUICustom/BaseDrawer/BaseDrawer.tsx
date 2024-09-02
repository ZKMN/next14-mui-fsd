import React from 'react';
import { Close } from '@mui/icons-material';
import {
  Box,
  Drawer,
  Grid2,
  IconButton,
} from '@mui/material';

import { useMediaSizes } from '@/shared/lib/hooks';
import { BaseDrawerProps } from '@/shared/types';

import { IntlTypography } from '../..';

export const BaseDrawer = ({
  open,
  anchor,
  children,
  titleIntl,
  titleExtraNode,
  onClose,
}: React.PropsWithChildren<BaseDrawerProps>) => {
  const { isLessSm } = useMediaSizes();

  return (
    <Drawer
      open={open}
      anchor={anchor || 'right'}
      onClose={onClose}
      PaperProps={{
        sx: ({ breakpoints }) => ({
          width: '30%',
          padding: 2,
          [breakpoints.up('xl')]: {
            width: '25%',
          },
          [breakpoints.down('md')]: {
            width: '50%',
          },
          [breakpoints.down('sm')]: {
            width: '90%',
          },
        }),
      }}
    >
      <Grid2
        container
        mb={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>

        <Grid2 container flex={1}>
          <Grid2 container justifyContent="space-between">
            {titleIntl && (
              <IntlTypography
                ml={2}
                variant="h6"
                component="h6"
                fontWeight={700}
                fontSize={isLessSm ? 20 : 28}
                intl={titleIntl}
              />
            )}

            <Box>
              {titleExtraNode}
            </Box>
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2>
        {children}
      </Grid2>
    </Drawer>
  );
};
