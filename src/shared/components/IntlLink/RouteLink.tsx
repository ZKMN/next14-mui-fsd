'use client';

import React from 'react';
import { Link as MUILink, LinkProps } from '@mui/material';
import Link from 'next/link';

import { useTypedParams } from '@/shared/lib/hooks';

export const RouteLink = ({
  sx,
  ml,
  mb,
  mr,
  to,
  width,
  color,
  display,
  variant,
  onClick,
  fontSize,
  children,
  textAlign,
  underline = 'hover',
  alignItems,
  fontWeight,
  fontFamily,
  lineHeight,
  textTransform,
}: LinkProps & { to: string; }) => {
  const { lng } = useTypedParams();

  return (
    <Link
      passHref
      legacyBehavior
      href={`/${lng}${to}`}
      lang={lng}
      locale={false}
    >
      <MUILink
        sx={{ ...sx, cursor: 'pointer' }}
        mb={mb}
        ml={ml}
        mr={mr}
        width={width}
        color={color}
        display={display}
        onClick={onClick}
        variant={variant}
        fontSize={fontSize}
        underline={underline}
        textAlign={textAlign}
        alignItems={alignItems}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        textTransform={textTransform}
      >
        {children}
      </MUILink>
    </Link>
  );
};
