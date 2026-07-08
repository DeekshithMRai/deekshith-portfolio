import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { personal } from '@/data/personal';
import { MagneticButton } from './MagneticButton';

const socialLinks = [
  { icon: Github, href: personal.social.github, label: 'GitHub' },
  { icon: Linkedin, href: personal.social.linkedin, label: 'LinkedIn' },
  { icon: Instagram, href: personal.social.instagram, label: 'Instagram' },
  { icon: FaWhatsapp, href: personal.social.whatsapp, label: 'WhatsApp' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-background/50 section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] xl:grid-cols-[1.8fr_1fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl font-semibold text-white">{personal.name}</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Software Developer focused on scalable backend systems, REST API design, and enterprise web applications. Building high-performance software with modern engineering practices and polished user experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                PHP • CodeIgniter
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                MySQL • PostgreSQL
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                React • RESTful APIs
              </span>
            </div>
          </motion.div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <MagneticButton
                variant="secondary"
                size="sm"
                onClick={() => window.open(personal.resumeUrl, '_blank')}
              >
                View Resume
              </MagneticButton>
              <MagneticButton variant="ghost" size="icon" onClick={scrollToTop} aria-label="Back to top">
                <ArrowUp size={18} />
              </MagneticButton>
            </div>

            <div className="rounded-3xl border border-white/10 bg-background/70 p-4 text-sm text-slate-400 backdrop-blur-xl">
              <p className="font-medium text-white">Let&apos;s build something strong.</p>
              <p className="mt-2 leading-6 text-slate-500">
                Reach out for backend architecture, ERP systems, REST API design, and performance optimization.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-slate-500">
          <p className="text-sm">
            Designed and built by {personal.name}. © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
