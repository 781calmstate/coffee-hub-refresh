import React from 'react';

import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form';

import { Input } from '@/components/ui';

import { FieldWrapper } from '../FieldWrapper';

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  error?: string;
  className?: string;
  wrapperClassName?: string;
  required?: boolean;
  label?: string;
  defaultValue?: PathValue<T, Path<T>>;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const FormInput = <T extends FieldValues>({
  control,
  name,
  error,
  className,
  wrapperClassName,
  required,
  label,
  defaultValue,
  ...props
}: Props<T>) => {
  return (
    <FieldWrapper
      className={wrapperClassName}
      error={error}
      name={name}
      label={label}
      required={required}
    >
      <Controller
        name={name}
        control={control}
        disabled={props.disabled}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Input
            aria-label={label ?? ''}
            id={props.id || field.name}
            {...props}
            {...field}
            className={className}
          />
        )}
      />
    </FieldWrapper>
  );
};
