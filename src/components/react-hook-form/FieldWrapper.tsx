import React from 'react';

import { cn } from '@/utils';

type Props = {
  error?: string;
  className?: string;
  required?: boolean;
  label?: string;
  name: string;
};

export const FieldWrapper = ({
  error,
  className,
  required = false,
  label,
  name,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <div className={cn('flex flex-col w-fit gap-3', className)}>
      {label && (
        <label
          htmlFor={name}
          className={cn('text-dark-coffee text-base', {
            'text-danger': !!error,
          })}
        >
          {required ? `${label} *` : label}
        </label>
      )}

      <div className="flex flex-col w-full gap-2">
        {children}

        <div className="text-danger text-sm min-h-9">{error ?? ''}</div>
      </div>
    </div>
  );
};
