'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { Warning } from '@mui/icons-material';
import { TextField } from '@mui/material';

import { useClientTranslation } from '@/shared/lib/hooks';
import { IFieldProps } from '@/shared/types';

export const FormInput = ({
  size,
  name,
  intl,
  maxRows,
  required,
  disabled,
  multiline,
  placeholder,
  endAdornment,
}: Omit<IFieldProps, 'type'>) => {
  const { control } = useFormContext();

  const [translate] = useClientTranslation('form');

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          fullWidth
          id={name}
          size={size}
          name={field.name}
          label={translate(intl.label, intl.values)}
          color="primary"
          error={!!fieldState.error}
          value={field.value || ''}
          maxRows={maxRows}
          minRows={maxRows}
          multiline={multiline}
          onBlur={field.onBlur}
          onChange={field.onChange}
          inputRef={field.ref}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          InputProps={{ endAdornment: fieldState.error ? <Warning color="error" /> : endAdornment }}
          helperText={fieldState.error?.message && translate(fieldState.error.message)}
        />
      )}
    />
  );
};
