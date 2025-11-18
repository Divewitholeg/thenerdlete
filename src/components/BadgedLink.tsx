{
  /* src/components/BadgedLink.tsx */
}

import React from 'react';
import { Badge } from '@/components/ui/badge';

interface BadgedLinkProps {
  href: string;
  label: string;
}

export const BadgedLink: React.FC<BadgedLinkProps> = ({ href, label }) => {
  return (
    <span>
      {' '}
      <Badge variant="outline" asChild>
        <a href={href}>{label}</a>
      </Badge>{' '}
    </span>
  );
};
