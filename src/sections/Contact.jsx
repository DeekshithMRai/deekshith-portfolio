import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from 'lucide-react';
import { personal } from '@/data/personal';
import { validateContactForm } from '@/utils/emailValidation';
import { SectionHeading, GlassCard } from '@/components/ui/SectionHeading';
import { MagneticButton } from '@/components/layout/MagneticButton';
import { cn } from '@/utils/cn';

// TODO: Replace with your EmailJS credentials
// Create a free account at https://www.emailjs.com/
// Add credentials to .env.local:
//   VITE_EMAILJS_SERVICE_ID=your_service_id
//   VITE_EMAILJS_TEMPLATE_ID=your_template_id
//   VITE_EMAILJS_PUBLIC_KEY=your_public_key
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: personal.location },
  { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
  { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateContactForm(form);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          to_email: personal.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Have a project in mind or want to connect? Send me a message."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <GlassCard key={label} className="!p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-white transition-colors hover:text-accent">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white">{value}</p>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}

            <MagneticButton
              variant="secondary"
              className="w-full"
              onClick={() => window.open(personal.resumeUrl, '_blank')}
            >
              Download Resume
            </MagneticButton>
          </div>

          <GlassCard className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className={cn(
                    'w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-slate-600 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary',
                    errors.name ? 'border-red-400' : 'border-white/10'
                  )}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={cn(
                      'w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-slate-600 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary',
                      errors.email ? 'border-red-400' : 'border-white/10'
                    )}
                    placeholder="you@email.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-600 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="+91 ..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Subject <span className="text-red-400">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  className={cn(
                    'w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-slate-600 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary',
                    errors.subject ? 'border-red-400' : 'border-white/10'
                  )}
                  placeholder="Project inquiry"
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={cn(
                    'w-full resize-none rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-slate-600 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary',
                    errors.message ? 'border-red-400' : 'border-white/10'
                  )}
                  placeholder="Tell me about your project..."
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 rounded-xl bg-green-500/10 px-4 py-3 text-green-400"
                  >
                    <CheckCircle size={18} />
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-xl bg-red-500/10 px-4 py-3 text-red-400"
                  >
                    {/* TODO: Configure EmailJS in .env.local to enable the contact form */}
                    Failed to send. Configure EmailJS credentials in .env.local or email me
                    directly at {personal.email}.
                  </motion.div>
                )}
              </AnimatePresence>

              <MagneticButton
                type="submit"
                className="w-full sm:w-auto"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </MagneticButton>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
