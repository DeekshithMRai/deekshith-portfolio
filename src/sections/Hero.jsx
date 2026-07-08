import { motion } from 'framer-motion';
import { ArrowDown, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { personal } from '@/data/personal';
import { stats } from '@/constants/theme';
import { MagneticButton } from '@/components/layout/MagneticButton';
import { useCounter } from '@/hooks/useCounter';

const HeroScene = lazy(() =>
  import('./HeroScene').then((m) => ({ default: m.HeroScene }))
);

function StatCounter({ value, suffix, label }) {
  const { count, ref } = useCounter(value, 2000);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl font-bold text-white sm:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-xs text-slate-500 sm:text-sm">{label}</p>
    </div>
  );
}

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <div className="noise-overlay" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-title mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="heading-xl text-balance text-white"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-xl font-medium text-accent sm:text-2xl"
          >
            {personal.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg"
          >
            {personal.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton
              onClick={() => window.open(personal.resumeUrl, '_blank')}
              data-cursor="pointer"
            >
              <FileText size={18} />
              View Resume
            </MagneticButton>
            <MagneticButton variant="secondary" onClick={scrollToContact} data-cursor="pointer">
              <Mail size={18} />
              Contact
            </MagneticButton>
            <MagneticButton
              variant="outline"
              onClick={() => window.open(personal.social.github, '_blank')}
              data-cursor="pointer"
            >
              <Github size={18} />
              GitHub
            </MagneticButton>
            <MagneticButton
              variant="outline"
              onClick={() => window.open(personal.social.linkedin, '_blank')}
              data-cursor="pointer"
            >
              <Linkedin size={18} />
              LinkedIn
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mx-auto mt-16 grid max-w-lg grid-cols-2 gap-8 sm:grid-cols-4"
          >
            <StatCounter {...stats.experience} />
            <StatCounter {...stats.projects} />
            <StatCounter {...stats.technologies} />
            <StatCounter {...stats.certificates} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-slate-500"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
