'use client';

import React, { useEffect } from 'react';

import { useURLQueryState } from '@/shared/lib/hooks';

import VideoEditor from '../../VideoEditor';

function initializeVideoEditor(url: string) {
  return new VideoEditor({
    // choose from 'small' or 'large' or add your own video source
    src: url,
    // crop: { width: 3, height: 4 },
    maxHeight: null,
    // optionally, add transformations
    transformations: {
      // crop: { h: 173, scale: '0.2', w: 343, x: '308', y: '153' },
      // time: { in: 5, out: 10 },
    },

    limit: { maxDuration: Infinity },
    // optionally, a menu bar items with font awesome icons
    // menuBarButtons: {
    //   inlineEndButtons: {
    //     cancel: {
    //       index: 3,``
    //       label: 'Exit',
    //       fontAwesomeIcon: 'fa fa-times',
    //     },
    //   },
    // },
    onError: (error) => {
      // do something with the error
    },
    onSave: (transform, videoSrc) => {
      // do something with the transformed video
      console.log('Saved!', transform, videoSrc);
    },
    onTimelineClick: (timeIndex) => {
      // get the current time index
    },
    // onClickHelpButton: (event) => {
    //   // custom help button
    // },
    onRangeLimit: ({ marker, maxDuration, time }) => {
      // do something when the range limit is reached
    },
    onRangeUpdate: (...args) => {
      // do something when the range is updated
    },
  });
}

export const VideoCrop = () => {
  const [, queryParams] = useURLQueryState();

  useEffect(() => {
    const root = document.getElementById('root');
    const url = queryParams.get('url') as string;

    const vidEditor = initializeVideoEditor(url);
    vidEditor.render(root);
  }, []);

  return (
    <div id="root" />
  );
};
