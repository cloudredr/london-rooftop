import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'card' | 'circle' | 'image';
}

export function Skeleton({
  variant = 'text',
  className,
  ...props
}: SkeletonProps) {
  const baseClasses =
    'animate-pulse bg-[#252525] border border-[#333333]/30 rounded-lg';

  const variantClasses = {
    text: 'h-4 w-full',
    card: 'h-64 w-full rounded-xl',
    circle: 'h-12 w-12 rounded-full',
    image: 'h-48 w-full rounded-xl',
  };

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  );
}
