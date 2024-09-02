'use client';

import React from 'react';
import { Trans, TransProps } from 'react-i18next';
import { Typography, TypographyProps } from '@mui/material';

import { useClientTranslation } from '@/shared/lib/hooks';
import { IIntlProps, TNamespaces } from '@/shared/types';

export const IntlTypography = ({
  sx,
  mb,
  mt,
  pl,
  mr,
  intl,
  color,
  trans,
  variant,
  position,
  fontSize,
  namespace,
  component,
  textAlign,
  fontWeight,
  fontFamily,
  lineHeight,
  components,
  textTransform,
  letterSpacing,
}: Omit<TypographyProps, 'children'> & IIntlProps & Pick<TransProps<string>, 'components'>
& { trans?: boolean; namespace?: TNamespaces; }) => {
  const [translate] = useClientTranslation(namespace || 'typography');

  return (
    <Typography
      sx={sx}
      mt={mt}
      mb={mb}
      mr={mr}
      pl={pl}
      color={color}
      variant={variant}
      position={position}
      fontSize={fontSize}
      fontFamily={fontFamily}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      component={component}
      textAlign={textAlign}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      textTransform={textTransform}
      letterSpacing={letterSpacing}
    >
      {(components || trans)
        ? (
          <Trans
            t={translate as TransProps<string>['t']}
            ns={namespace || 'typography'}
            values={intl.values}
            i18nKey={intl.label}
            components={components}
          />
        ) : translate(intl.label, intl.values)}
    </Typography>
  );
};
