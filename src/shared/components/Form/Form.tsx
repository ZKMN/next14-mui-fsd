'use client';

/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import {
  FieldValues,
  FormProvider,
  Resolver,
  useForm,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid2 } from '@mui/material';
import { useBoolean, useKeyPress } from 'ahooks';

import { IFormProps } from '@/shared/types';

import { FieldByType } from './components';

import { IntlLoadingButton } from '..';

export const Form = <T extends FieldValues>({
  mode,
  fields,
  loading,
  children,
  buttonProps,
  initialValues,
  validationSchema,
  onSubmit,
}: React.PropsWithChildren<IFormProps<T>>) => {
  const [isDirty, { set: setDirty }] = useBoolean(false);
  const [isValid, { set: setValid }] = useBoolean(false);

  const form = useForm<T>({
    mode: mode || 'onChange',
    disabled: loading,
    defaultValues: initialValues,
    resolver: yupResolver<T>(validationSchema) as unknown as Resolver<T>,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
    setValid(form.formState.isValid);
  }, [form.formState.isDirty, form.formState.isValid]);

  useKeyPress('enter', () => {
    if (isValid && isDirty && onSubmit) {
      form.handleSubmit(onSubmit)();
    }
  });

  return (
    <FormProvider {...form}>
      <Grid2 container spacing={2}>
        {fields.map((field) => (
          <Grid2
            size={{ xs: field.grid?.xs || 12, md: field.grid?.md }}
            key={field.name}
          >
            <FieldByType field={field} />
          </Grid2>
        ))}
      </Grid2>

      {children}

      {buttonProps && onSubmit && (
        <Grid2 container mt={3}>
          <IntlLoadingButton
            intl={buttonProps.intl}
            size={buttonProps.size || 'large'}
            loading={loading}
            onClick={form.handleSubmit(onSubmit)}
            disabled={loading || !isValid || !isDirty || buttonProps.disabled}
          />
        </Grid2>
      )}
    </FormProvider>
  );
};
