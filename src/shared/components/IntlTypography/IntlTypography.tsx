'use client';

import React from 'react';
import { Trans, TransProps } from 'react-i18next';
import { Typography, TypographyProps } from '@mui/material';

import { useClientTranslation } from '@/shared/lib/hooks';
import { IIntlProps } from '@/shared/types';

export const IntlTypography = ({
  sx,
  mb,
  pl,
  mr,
  intl,
  color,
  variant,
  transKey,
  fontSize,
  component,
  textAlign,
  fontWeight,
  fontFamily,
  components,
  textTransform,
}: Omit<TypographyProps, 'children'> & IIntlProps<`${'titles.' | 'texts.' | 'links.' | 'labels.'}${string}`>
& Pick<TransProps<string>, 'components'> & { transKey?: string; }) => {
  const [translate] = useClientTranslation(transKey || 'typography');

  return (
    <Typography
      sx={sx}
      mb={mb}
      mr={mr}
      pl={pl}
      color={color}
      variant={variant}
      fontFamily={fontFamily}
      fontSize={fontSize}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      component={component}
      textAlign={textAlign}
      fontWeight={fontWeight}
      textTransform={textTransform}
    >
      {components
        ? (
          <Trans
            t={translate as TransProps<string>['t']}
            ns={transKey || 'typography'}
            values={intl.values}
            i18nKey={intl.label}
            components={components}
          />
        ) : translate(intl.label, intl.values)}
    </Typography>
  );
};
