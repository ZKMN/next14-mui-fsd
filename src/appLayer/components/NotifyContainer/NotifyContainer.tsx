import React from 'react';
import { ToastContainer } from 'react-toastify';

export const NotifyContainer = () => (
  <ToastContainer
    stacked
    closeOnClick
    hideProgressBar
    position="bottom-left"
    draggable={false}
    closeButton={false}
  />
);
