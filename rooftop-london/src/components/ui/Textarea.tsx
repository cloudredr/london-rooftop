'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  wrapperClassName?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      label,
      error,
      helperText,
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
          <textarea
            ref={ref}
            id={id}
            className={cn(
              'w-full rounded-lg border bg-secondary px-4 py-2.5 text-sm text-cream',
              'placeholder:text-muted/60',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent',
              'resize-y min-h-[100px]',
              error
                ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500'
                : 'border-white/10 hover:border-white/20',
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

          {error && (
            <span className="pointer-events-none absolute right-3 top-3 text-red-400">
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
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
