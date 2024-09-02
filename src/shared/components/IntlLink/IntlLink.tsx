'use client';

import React from 'react';
import { Trans, TransProps } from 'react-i18next';
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
  trans,
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
  components,
  textTransform,
}: LinkProps & { intl?: IIntlProps['intl']; to?: string; trans?: boolean; } & Pick<TransProps<string>, 'components'>) => {
  const [translate] = intl ? useClientTranslation('links') : [];

  let content = children;

  if (intl && translate) {
    content = translate(intl.label, intl.values);
  }

  if (intl && translate && (components || trans)) {
    content = (
      <Trans
        t={translate as TransProps<string>['t']}
        ns="links"
        values={intl.values}
        i18nKey={intl.label}
        components={components}
      />
    );
  }

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
        {content}
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
      aria-label={(intl && translate) && translate(intl.label)}
    >
      {content}
    </MUILink>
  );
};
