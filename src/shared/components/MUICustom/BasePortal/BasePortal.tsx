'use client';

import React, { useLayoutEffect } from 'react';
import { Portal } from '@mui/material';
import { useBoolean } from 'ahooks';

export const BasePortal = ({ id, children }: React.PropsWithChildren<{ id: `${string}-portal`; }>) => {
  const [mounted, { setTrue }] = useBoolean(false);

  useLayoutEffect(() => {
    setTrue();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Portal container={document.getElementById(id)}>
      {children}
    </Portal>
  );
};
