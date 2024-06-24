'use client';

import React from 'react';
import { Box } from '@mui/material';
import Image, { ImageLoaderProps, ImageProps } from 'next/image';

import { getBase64 } from '@/shared/lib/helpers';

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => `${src}?w=${width}&q=${quality || 75}`;

const shimmer = (w: ImageProps['width'], h: ImageProps['height']) => (
  `<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#F9F8F2" offset="20%" />
        <stop stop-color="#E5E5E5" offset="50%" />
        <stop stop-color="#F9F8F2" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#F9F8F2" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`
);

interface IImg {
  src?: string;
  width?: ImageProps['width'];
  height?: ImageProps['width'];
  pointer?: boolean;
  fullWidth?: boolean;
  objectFit?: React.CSSProperties['objectFit'];
  borderRadius?: string;
}

export const BaseImage = ({
  src,
  alt,
  width,
  height,
  pointer,
  priority,
  objectFit,
  fullWidth,
  className,
  borderRadius,
  onClick,
}: Omit<ImageProps, 'src' | 'objectFit' | 'width' | 'height'> & IImg) => {
  if (!src) {
    return null;
  }

  if (fullWidth) {
    return (
      <Image
        src={src}
        alt={alt}
        sizes="100vw"
        width={0}
        height={0}
        loader={imageLoader}
        onClick={onClick}
        priority={priority}
        style={{
          borderRadius,
          width: '100%',
          height: 'auto',
          cursor: (onClick || pointer) ? 'pointer' : '',
          objectFit: 'cover',
        }}
      />
    );
  }

  if (className) {
    return (
      <Box className={className}>
        <Image
          width={0}
          height={0}
          alt={alt}
          src={src}
          onClick={onClick}
          style={{
            borderRadius,
            width: '100%',
            height: 'auto',
            cursor: (onClick || pointer) ? 'pointer' : '',
            objectFit: 'contain',
          }}
        />
      </Box>
    );
  }

  return (
    <Box
      width={width}
      height={height}
      position="relative"
      overflow="hidden"
    >
      <Image
        fill
        src={src}
        alt={alt}
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loader={imageLoader}
        onClick={onClick}
        priority={priority}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${getBase64(shimmer(width, height))}`}
        style={{
          borderRadius,
          cursor: (onClick || pointer) ? 'pointer' : '',
          objectFit: objectFit || 'cover',
        }}
      />
    </Box>
  );
};
