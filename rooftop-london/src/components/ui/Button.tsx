'use client';

import React, { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  href?: string;
}

type MotionButtonProps = ButtonBaseProps &
  Omit<HTMLMotionProps<'button'>, keyof ButtonBaseProps>;

type LinkButtonProps = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = MotionButtonProps | LinkButtonProps;

/* ------------------------------------------------------------------ */
/*  Style maps                                                         */
/* ------------------------------------------------------------------ */

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent text-primary hover:bg-accent/90 shadow-[0_0_20px_rgba(200,166,106,0.15)]',
  secondary:
    'border border-accent text-accent hover:bg-accent/10 bg-transparent',
  ghost:
    'text-cream hover:bg-white/5 bg-transparent',
  danger:
    'bg-red-600 text-white hover:bg-red-700',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-8 px-3 text-xs gap-1.5 rounded-md',
  md: 'h-10 px-5 text-sm gap-2 rounded-lg',
  lg: 'h-12 px-7 text-base gap-2.5 rounded-lg',
};

/* ------------------------------------------------------------------ */
/*  Spinner                                                            */
/* ------------------------------------------------------------------ */

function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn('animate-spin', className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const MotionLink = motion.create(Link);

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = 'primary',
    size = 'md',
    iconLeft,
    iconRight,
    loading = false,
    href,
    className,
    children,
    disabled,
    ...rest
  } = props as MotionButtonProps & { href?: string };

  const isDisabled = disabled || loading;

  const sharedClasses = cn(
    'inline-flex items-center justify-center font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary',
    'select-none whitespace-nowrap',
    variantClasses[variant],
    sizeClasses[size],
    isDisabled && 'pointer-events-none opacity-50',
    className
  );

  const motionProps = {
    whileHover: isDisabled ? undefined : { scale: 1.03 },
    whileTap: isDisabled ? undefined : { scale: 0.97 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 20 },
  };

  const content = (
    <>
      {loading ? <Spinner className="shrink-0" /> : iconLeft}
      {children}
      {iconRight}
    </>
  );

  /* Render as link */
  if (href) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={sharedClasses}
        aria-disabled={isDisabled || undefined}
        tabIndex={isDisabled ? -1 : undefined}
        {...(rest as any)}
      >
        {content}
      </Link>
    );
  }

  /* Render as button */
  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={sharedClasses}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...motionProps}
      {...(rest as HTMLMotionProps<'button'>)}
    >
      {content}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;
