import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export function SectionHeading({ label, title, description, className, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-16',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        className
      )}
    >
      {label && <p className="section-title mb-3">{label}</p>}
      <h2 className="heading-lg text-white">{title}</h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">{description}</p>
      )}
    </motion.div>
  );
}

export function GlassCard({ children, className, ...props }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn('glass-hover rounded-xl p-6', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
