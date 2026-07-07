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
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-bold text-white">
              {personal.name.split(' ')[0]}
              <span className="text-primary">.</span>
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Built with React, Three.js & passion.
            </p>
          </motion.div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.1 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl glass text-slate-400 transition-colors hover:text-accent"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <MagneticButton
              variant="secondary"
              size="sm"
              onClick={() => window.open(personal.resumeUrl, '_blank')}
            >
              Resume
            </MagneticButton>
            <MagneticButton variant="ghost" size="icon" onClick={scrollToTop} aria-label="Back to top">
              <ArrowUp size={18} />
            </MagneticButton>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
