import { SectionHeading, GlassCard } from '@/components/ui/SectionHeading';
import { MagneticButton } from '@/components/layout/MagneticButton';
import { Mail, MapPin, Phone } from 'lucide-react';
import { personal } from '@/data/personal';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: personal.location },
  { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
  { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
];

export function Contact() {
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
              Open Resume
            </MagneticButton>
          </div>

          <GlassCard className="lg:col-span-3">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="access_key" value="ff55afc7-cf18-4306-b7f5-50ea0ee2a7bc" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullname" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-600 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pl-11 text-white placeholder-slate-600 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>
                    </span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pl-11 text-white placeholder-slate-600 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="+91 ..."
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-600 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Subject"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-600 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your message"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
