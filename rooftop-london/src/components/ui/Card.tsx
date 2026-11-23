'use client';

import React, { forwardRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  imageHeight?: number;
  as?: 'div' | 'article' | 'section';
}

const paddingClasses: Record<NonNullable<CardProps['padding']>, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    children,
    padding = 'md',
    hover = true,
    imageSrc,
    imageAlt = '',
    imageHeight = 200,
    className,
    as: _as = 'div',
    ...rest
  },
  ref
) {
  const MotionComponent = motion.create(_as);

  return (
    <MotionComponent
      ref={ref}
      className={cn(
        'overflow-hidden rounded-xl border border-white/5 bg-secondary',
        'transition-shadow duration-300',
        hover && [
          'hover:border-accent/30',
          'hover:shadow-[0_0_30px_rgba(200,166,106,0.08)]',
        ],
        !imageSrc && paddingClasses[padding],
        className
      )}
      {...(hover
        ? {
            whileHover: { scale: 1.015, y: -2 },
            transition: { type: 'spring', stiffness: 300, damping: 24 },
          }
        : {})}
      {...rest}
    >
      {imageSrc && (
        <div
          className="relative w-full overflow-hidden"
          style={{ height: imageHeight }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      {imageSrc ? (
        <div className={paddingClasses[padding]}>{children}</div>
      ) : (
        children
      )}
    </MotionComponent>
  );
});

Card.displayName = 'Card';

export default Card;
