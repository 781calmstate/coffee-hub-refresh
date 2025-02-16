import React from 'react';

import { cn } from '@/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'font-montserrat flex h-9 w-full rounded-md border border-taupe-coffee bg-light-coffee px-3 py-1 text-base shadow-sm transition-all focus-visible:outline-none focus-visible:shadow-coffee focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
