import { SelectProps } from '@radix-ui/react-select';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

import { FieldWrapper } from '../FieldWrapper';

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  error?: string;
  className?: string;
  wrapperClassName?: string;
  required?: boolean;
  label?: string;
  selectLabel?: string;
  defaultValue?: PathValue<T, Path<T>>;
  triggerClassName?: string;
  contentClassName?: string;
  groupClassName?: string;
  selectLabelClassName?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
} & SelectProps;

export const FormSelect = <T extends FieldValues>({
  control,
  name,
  error,
  className,
  wrapperClassName,
  required,
  label,
  defaultValue,
  selectLabel,
  options,
  triggerClassName,
  contentClassName,
  groupClassName,
  selectLabelClassName,
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
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            {...props}
            {...field}
          >
            <SelectTrigger className={triggerClassName}>
              <SelectValue
                placeholder={props.placeholder || 'Select an option'}
              />
            </SelectTrigger>

            <SelectContent className={contentClassName}>
              <SelectGroup className={groupClassName}>
                {selectLabel ? (
                  <SelectLabel className={selectLabelClassName}>
                    {selectLabel}
                  </SelectLabel>
                ) : null}

                {options.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
    </FieldWrapper>
  );
};
