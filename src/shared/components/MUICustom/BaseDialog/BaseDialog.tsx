import React from 'react';
import { Close } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

import { useMediaSizes } from '@/shared/lib/hooks';
import { IBaseDialogProps } from '@/shared/types';

import { IntlButton, IntlTypography, LoadingIntlButton } from '../..';

const Transition = React.forwardRef((
  props: TransitionProps & { children: React.ReactElement; },
  ref: React.Ref<unknown>,
// eslint-disable-next-line react/jsx-props-no-spreading
) => <Slide direction="up" ref={ref} {...props} />);

export const BaseDialog = ({
  isOpen,
  footer,
  loading,
  children,
  closable,
  maxWidth,
  minWidth,
  titleIntl,
  fullWidth,
  fullScreen,
  titleExtraNode,
  onClose,
  onSubmit,
}: React.PropsWithChildren<IBaseDialogProps>) => {
  const { isLessSm } = useMediaSizes();

  const footerNode = footer || footer === null ? footer : (
    <Grid
      container
      spacing={2}
      justifyContent="flex-end"
    >
      <Grid item xs={12} md={6}>
        <IntlButton
          intl={{ label: 'cancel' }}
          variant="outlined"
          onClick={onClose}
        />
      </Grid>

      {onSubmit && (
        <Grid item xs={12} md={6}>
          <LoadingIntlButton
            intl={{ label: 'submit' }}
            variant="contained"
            loading={loading}
            onClick={onSubmit}
          />
        </Grid>
      )}
    </Grid>
  );

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { minWidth: minWidth || '30%' } }}
      open={isOpen}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      fullScreen={fullScreen || isLessSm}
      TransitionComponent={Transition}
    >
      <AppBar
        color="transparent"
        position="sticky"
        elevation={2}
      >
        <DialogTitle
          sx={({ breakpoints }) => ({
            [breakpoints.down('sm')]: {
              padding: 1.5,
            },
          })}
        >
          <Grid container alignItems="center">
            <Grid item flex={1}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <IntlTypography
                  intl={titleIntl}
                  variant="h5"
                  component="h5"
                  fontWeight={700}
                />

                {titleExtraNode}
              </Grid>
            </Grid>

            {closable && (
              <Grid item>
                <IconButton onClick={onClose}>
                  <Close />
                </IconButton>
              </Grid>
            )}
          </Grid>
        </DialogTitle>
      </AppBar>

      <DialogContent
        sx={({ breakpoints }) => ({
          [breakpoints.down('sm')]: {
            padding: 1.5,
          },
        })}
      >
        {children}
      </DialogContent>

      {footerNode && (
        <Box
          p={2}
          position="sticky"
          bottom={0}
          bgcolor="background.paper"
          borderTop="1px solid"
          borderColor="border.main"
        >
          {footerNode}
        </Box>
      )}
    </Dialog>
  );
};
