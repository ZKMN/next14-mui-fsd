/* eslint-disable jsx-a11y/media-has-caption */

'use client';

import React from 'react';
import { Grid } from '@mui/material';

import { usePostRequest } from '@/shared/api/hooks';
import { BaseImage, IntlLoadingButton } from '@/shared/components';
import { useClickRedirect } from '@/shared/lib/hooks';

const videoSrcs = [
  {
    preview: '/images/img2.png',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
  {
    preview: '/images/img1.png',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  },
];

export const Home = () => {
  const [handleRedirect] = useClickRedirect();

  const [post, { data, loading }] = usePostRequest<{ data: Record<string, string>[]; }>({
    url: '/video-concat',
    baseURL: 'http://localhost:3000/api',
  });

  const record = data?.data[0];

  return (
    <Grid container padding={2} spacing={2}>
      {videoSrcs.map((video) => (
        <Grid
          item
          key={video.url}
        >
          <Grid
            component="button"
            onClick={handleRedirect(`/video-crop?url=${video.url}`)}
          >
            <BaseImage
              src={video.preview}
              alt="Video"
              width={220}
              height={200}
            />
          </Grid>
        </Grid>
      ))}

      <Grid container padding={2} spacing={2}>
        <Grid item xs={12}>
          {!!record && (
            <video
              controls
              width={record.width}
              height={record.height}
            >
              <source src={record.url} type="video/mp4" />
            </video>
          )}
        </Grid>

        <Grid item xs={12}>
          <IntlLoadingButton
            sx={{ width: 'auto' }}
            onClick={() => post()}
            variant="contained"
            loading={loading}
          >
            Stitch
          </IntlLoadingButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
