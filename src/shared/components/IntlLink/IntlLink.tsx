'use client';

import React from 'react';
import { Link as MUILink, LinkProps } from '@mui/material';

import { useClientTranslation } from '@/shared/lib/hooks';
import { IIntlProps } from '@/shared/types';

import { RouteLink } from './RouteLink';

export const IntlLink = ({
  sx,
  ml,
  mb,
  mr,
  to,
  intl,
  href,
  width,
  color,
  target = '_blank',
  variant,
  onClick,
  display,
  fontSize,
  children,
  textAlign,
  underline = 'hover',
  alignItems,
  fontWeight,
  fontFamily,
  lineHeight,
  textTransform,
}: LinkProps & { intl?: IIntlProps['intl']; to?: string; }) => {
  const [translate] = useClientTranslation('typography', { keyPrefix: 'links' });

  if (to) {
    return (
      <RouteLink
        sx={sx}
        mb={mb}
        ml={ml}
        mr={mr}
        to={to}
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
        lineHeight={lineHeight}
        fontWeight={fontWeight}
        textTransform={textTransform}
      >
        {intl ? translate(intl.label, intl.values) : children}
      </RouteLink>
    );
  }

  return (
    <MUILink
      sx={sx}
      mb={mb}
      ml={ml}
      mr={mr}
      href={href}
      color={color}
      target={target}
      display={display}
      onClick={onClick}
      variant={variant}
      fontSize={fontSize}
      underline={underline}
      textAlign={textAlign}
      alignItems={alignItems}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      textTransform={textTransform}
      aria-label={intl && translate(intl.label)}
    >
      {intl ? translate(intl.label, intl.values) : children}
    </MUILink>
  );
};
