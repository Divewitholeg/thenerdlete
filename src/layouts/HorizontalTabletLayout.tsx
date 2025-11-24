import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const HorizontalTabletLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ScrollArea className="h-screen rounded-md border p-4">
      <div className="flex flex-col min-h-screen max-w-4xl mx-auto bg-background/50 backdrop-blur-sm rounded-lg">
        {children}
      </div>
    </ScrollArea>
  );
};

export default HorizontalTabletLayout; // Make sure this is default export
