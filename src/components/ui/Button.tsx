import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

export type ButtonVariants =
  | 'primary'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';

export type ButtonSizes = 'default' | 'sm' | 'lg' | 'icon';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: ButtonVariants;
  size?: ButtonSizes;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'default',
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
          {
            // Variant
            'bg-dark-coffee text-white shadow hover:bg-dark-coffee/90':
              variant === 'primary',
            'bg-danger text-white shadow-sm hover:bg-danger/90':
              variant === 'destructive',
            'text-taupe-coffee border border-taupe-coffee bg-transparent shadow-sm hover:bg-mocha-brown hover:text-white':
              variant === 'outline',
            'bg-mocha-brown text-white shadow-sm hover:bg-espresso-dark':
              variant === 'secondary',
            'text-taupe-coffee hover:bg-mocha-brown hover:text-white':
              variant === 'ghost',
            'text-taupe-coffee underline-offset-4 hover:underline':
              variant === 'link',
            // Size
            'h-9 px-4 py-2': size === 'default',
            'h-8 rounded-md px-3 text-xs': size === 'sm',
            'h-10 rounded-md px-8': size === 'lg',
            'h-9 w-9': size === 'icon',
          },
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
