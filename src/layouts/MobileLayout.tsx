// A wrapper layout component for mobile devices
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollArea className="h-screen rounded-md border p-1">
      <div className="flex flex-col min-h-screen">{children}</div>
    </ScrollArea>
  );
};

export default MobileLayout;
