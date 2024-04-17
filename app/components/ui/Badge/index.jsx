import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@utils/cn';
import { cva } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center rounded-lg leading-none gap-2 text-xs font-medium ring-1 ring-inset',
  {
    variants: {
      variant: {
        gray: 'bg-gray-50 text-gray-600 ring-gray-500/10',
        white:
          'bg-white text-neutral-700 ring-gray-200/60 dark:bg-neutral-800 dark:ring-neutral-600 dark:text-neutral-500',
        red: 'bg-red-50 text-red-700 ring-red-600/10',
        yellow: 'bg-yellow-50 text-yellow-800 ring-1 ring-yellow-600/20',
        green: 'bg-green-50 font-medium text-green-700 ring-green-600/20',
        blue: 'bg-blue-50 text-blue-700 ring-blue-700/10',
        indigo: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
        purple: 'bg-purple-50 text-purple-700 ring-purple-700/10',
        pink: 'bg-pink-50 text-pink-700 ring-pink-700/10',
      },
      size: {
        sm: 'px-2 py-1',
        md: 'px-3 py-2',
      },
    },
    defaultVariants: {
      variant: 'gray',
      size: 'sm',
    },
  },
);

function Badge({ children, className, variant, size, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant, size, className }))} {...props}>
      {children}
    </div>
  );
}

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants };
