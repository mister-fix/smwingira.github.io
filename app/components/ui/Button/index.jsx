import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@utils/cn';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-75 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-neutral-900 text-white hover:bg-neutral-900/80 disabled:bg-neutral-900 dark:bg-neutral-800 dark:hover:bg-neutral-700/10',
        secondary:
          'bg-gray-500 text-white hover:bg-gray-500/80 disabled:bg-gray-500',
        outline:
          'bg-transparent border text-neutral-900 hover:bg-white disabled:text-neutral-400 disabled:bg-transparent',
        light: 'bg-gray-200 text-neutral-800 hover:bg-gray-300/80',
        danger: 'bg-red-500 text-white hover:bg-red-500/75 disabled:bg-red-500',
        success:
          'bg-emerald-500 text-white hover:bg-emerald-500/75 disabled:bg-emerald-500',
      },
      size: {
        sm: 'h-9 rounded-lg px-3',
        md: 'h-10 rounded-xl px-4 py-2 text-sm',
        lg: 'h-11 rounded-xl px-6',
        xl: 'h-12 rounded-2xl px-8',
        xxl: 'h-20 rounded-2xl px-10 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

function Button({ children, className, variant, size, disabled, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
