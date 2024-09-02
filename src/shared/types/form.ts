import {
  DefaultValues,
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormProps,
} from 'react-hook-form';
import {
  BaseTextFieldProps,
  Breakpoint,
  ButtonProps,
  GridSize,
  InputProps,
} from '@mui/material';
import * as Yup from 'yup';

import { IIntlProps } from '.';

type ResponsiveStyleValue<T> = {
  [key in Breakpoint]?: T | null;
};

export interface IFieldProps extends Omit<BaseTextFieldProps, 'label'>, Pick<InputProps, 'endAdornment'> {
  type: IFieldProps.type;
  name: string;
  intl: IIntlProps['intl'];
  grid?: ResponsiveStyleValue<GridSize>;
}

export namespace IFieldProps {

  export enum type {
    TEXT = 'TEXT',
    PHONE_NUMBER = 'PHONE_NUMBER'
  }

}

export interface IFormProps<T extends FieldValues> extends UseFormProps<T> {
  fields: IFieldProps[];
  loading?: boolean;
  buttonProps?: ButtonProps & { loading?: boolean; intl: IIntlProps['intl']; };
  initialValues: DefaultValues<T>;
  validationSchema: Yup.ObjectSchema<T>;
  onSubmit?: SubmitFn<T>;
}

export interface IFieldErrorProps<T extends FieldValues> {
  name: IFieldProps['name'];
  errors: FieldErrors<T>;
}

export type SubmitFn<T extends FieldValues> = Parameters<UseFormHandleSubmit<T, T>>[0];
