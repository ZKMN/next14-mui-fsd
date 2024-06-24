'use client';

import React, { useRef, useState } from 'react';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { Popper } from '@mui/base/Popper';
import {
  Box, Button, IconButton, styled,
} from '@mui/material';
import { useBoolean } from 'ahooks';

const arrow = {
  position: 'absolute',
  fontSize: 7,
  width: '3em',
  height: '3em',
  '&::before': {
    content: '""',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    borderStyle: 'solid',
  },
};

const StyledPopper = styled(Popper)(({ theme }) => ({ // You can replace with `PopperUnstyled` for lower bundle size.
  zIndex: 1,
  '&[data-popper-placement*="bottom"] .arrow': {
    top: 0,
    left: 0,
    marginTop: '-0.9em',
    width: '3em',
    height: '1em',
    zIndex: 2,
    '&::before': {
      borderWidth: '0 1em 1em 1em',
      borderColor: `transparent transparent ${theme.palette.border.main} transparent`,
    },
  },
  '&[data-popper-placement*="top"] .arrow': {
    bottom: 0,
    left: 0,
    marginBottom: '-0.9em',
    width: '3em',
    height: '1em',
    '&::before': {
      borderWidth: '1em 1em 0 1em',
      borderColor: `${theme.palette.border.main} transparent transparent transparent`,
    },
  },
  '&[data-popper-placement*="right"] .arrow': {
    left: 0,
    marginLeft: '-0.9em',
    height: '3em',
    width: '1em',
    '&::before': {
      borderWidth: '1em 1em 1em 0',
      borderColor: `transparent ${theme.palette.border.main} transparent transparent`,
    },
  },
  '&[data-popper-placement*="left"] .arrow': {
    right: 0,
    marginRight: '-0.9em',
    height: '3em',
    width: '1em',
    '&::before': {
      borderWidth: '1em 0 1em 1em',
      borderColor: `transparent transparent transparent ${theme.palette.border.main}`,
    },
  },
}));

export const BasePopup = ({ icon, children }: React.PropsWithChildren<{ icon?: React.ReactNode; }>) => {
  const ref = useRef(null);
  const [arrowRef, setArrowRef] = useState(null);
  const [open, { toggle, setFalse }] = useBoolean();

  return (
    <Box ref={ref}>
      {icon
        ? <IconButton onClick={toggle}>{icon}</IconButton>
        : <Button onClick={toggle}>Click</Button>}

      <StyledPopper
        disablePortal
        open={open}
        anchorEl={ref.current}
        placement="left"
        modifiers={[
          {
            name: 'arrow',
            enabled: true,
            options: {
              element: arrowRef,
            },
          },
        ]}
      >

        <ClickAwayListener onClickAway={setFalse}>
          <Box
            p={1}
            bgcolor="background.paper"
            border="1px solid"
            borderColor="border.main"
            borderRadius={1}
          >
            {children}

            <Box
              sx={arrow}
              ref={setArrowRef}
              component="span"
              className="arrow"
            />
          </Box>
        </ClickAwayListener>
      </StyledPopper>
    </Box>
  );
};
