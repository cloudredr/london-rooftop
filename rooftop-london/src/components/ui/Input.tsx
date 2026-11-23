'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    error,
    helperText,
    iconLeft,
    iconRight,
    className,
    wrapperClassName,
    id: externalId,
    ...props
  },
  ref
) {
  const autoId = useId();
  const id = externalId ?? autoId;
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;

  return (
    <div className={cn('flex flex-col gap-1.5', wrapperClassName)}>
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-cream/90 select-none"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {iconLeft && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">
            {iconLeft}
          </span>
        )}

        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full rounded-lg border bg-secondary px-4 py-2.5 text-sm text-cream',
            'placeholder:text-muted/60',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent',
            error
              ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500'
              : 'border-white/10 hover:border-white/20',
            iconLeft && 'pl-10',
            iconRight && 'pr-10',
            'disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            [error && errorId, helperText && helperId]
              .filter(Boolean)
              .join(' ') || undefined
          }
          {...props}
        />

        {iconRight && !error && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">
            {iconRight}
          </span>
        )}

        {error && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-red-400">
            <AlertCircle size={16} />
          </span>
        )}
      </div>

      {error && (
        <p id={errorId} className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={helperId} className="text-xs text-muted">
          {helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
