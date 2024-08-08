import React, { Suspense } from 'react';

import { VideoCrop } from '@/pagesLayer/VideoCrop';

const VideoCropPage = () => (
  <Suspense>
    <VideoCrop />
  </Suspense>
);

export default VideoCropPage;
