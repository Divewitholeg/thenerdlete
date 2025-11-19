/* src/components/BadgedLink.tsx */

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { IconBaseProps } from 'react-icons';

// More specific type for React Icons
type ReactIcon = React.ComponentType<IconBaseProps>;

interface BadgedLinkProps {
  href: string;
  icon?: React.ReactNode | ReactIcon;
  label: string;
  itemProp?: string;
  variant?: 'default' | 'secondary' | 'outline' | 'destructive';
  className?: string;
  ariaLabel?: string;
  role?: string;
  itemScope?: boolean;
  itemType?: string;
  iconSize?: number | string;
  iconColor?: string;
  iconClassName?: string;
}

export const BadgedLink: React.FC<BadgedLinkProps> = ({
  href,
  label,
  icon,
  itemProp,
  variant = 'outline', // Default for all
  className,
  ariaLabel,
  role,
  itemScope,
  itemType,
  iconSize = 14, // Default for all (changed from 12 to 14)
  iconColor,
  iconClassName,
}) => {
  // Render icon with proper typing
  const renderIcon = () => {
    if (!icon) return null;

    // If it's a React Icon component (has render function)
    if (typeof icon === 'function') {
      const IconComponent = icon as ReactIcon;
      return (
        <IconComponent
          size={iconSize}
          color={iconColor}
          className={cn('shrink-0', iconClassName)}
        />
      );
    }

    // If it's already a ReactNode (JSX element)
    return (
      <span
        className={cn('shrink-0', iconClassName)}
        style={{
          width: iconSize,
          height: iconSize,
          color: iconColor,
        }}
      >
        {icon}
      </span>
    );
  };

  return (
    <span itemScope={itemScope} itemType={itemType}>
      <Badge
        variant={variant}
        className={cn(
          'inline-flex items-center gap-1.5 transition-colors mx-1', // mx-1 added as default
          className
        )}
        asChild
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          itemProp={itemProp}
          aria-label={ariaLabel || `Visit our ${label}`}
          role={role}
          className="no-underline"
        >
          {renderIcon()}
          <span className="whitespace-nowrap" itemProp="name">
            {label}
          </span>
        </a>
      </Badge>
    </span>
  );
};
