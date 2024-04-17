import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@utils/cn';
import { icons } from 'lucide-react';

function Icon({ name, color, size, className, ...props }) {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      color={color}
      size={size}
      className={cn('stroke-[1.5px]', className)}
      {...props}
    />
  );
}

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export { Icon };
