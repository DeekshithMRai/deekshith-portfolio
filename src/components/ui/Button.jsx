import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white shadow-glow hover:bg-primary/90 hover:shadow-glow active:scale-[0.98]',
        secondary:
          'glass text-white hover:border-white/20 hover:bg-white/[0.12] active:scale-[0.98]',
        ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
        accent:
          'bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 active:scale-[0.98]',
        outline:
          'border border-white/20 text-white hover:border-primary/50 hover:bg-primary/10 active:scale-[0.98]',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export function Button({
  className,
  variant,
  size,
  magnetic = false,
  magneticRef,
  children,
  ...props
}) {
  return (
    <button
      ref={magnetic ? magneticRef : undefined}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export { buttonVariants };
