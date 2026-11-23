import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#F7F5F0] tracking-wide">
        {title}
      </h2>
      {/* Gold decorative line */}
      <div
        className={cn(
          'mt-4 h-px w-20 bg-gradient-to-r from-transparent via-[#C8A66A] to-transparent',
          align === 'center' && 'mx-auto'
        )}
      />
      {subtitle && (
        <p className="mt-4 max-w-2xl text-[#A8A8A8] text-base md:text-lg mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
