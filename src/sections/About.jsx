import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Languages, Sparkles } from 'lucide-react';
import { personal } from '@/data/personal';
import { timeline } from '@/data/experience';
import { SectionHeading, GlassCard } from '@/components/ui/SectionHeading';
import { useCounter } from '@/hooks/useCounter';

export function About() {
  const { count: projectCount, ref: projectRef } = useCounter(10, 2000);

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="About"
          title="Crafting digital experiences with purpose"
          description="Backend & full-stack developer passionate about building scalable, user-centric applications."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-xl glass">
              <img
                src={personal.image}
                alt={`${personal.name} — Software Developer`}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              ref={projectRef}
              className="absolute -bottom-6 -right-6 rounded-xl glass px-6 py-4"
            >
              <p className="text-3xl font-bold text-white">{projectCount}+</p>
              <p className="text-sm text-slate-400">Projects completed</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-relaxed text-slate-300">{personal.bio}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: MapPin, label: 'Location', value: personal.location },
                { icon: GraduationCap, label: 'Education', value: personal.education },
                { icon: Languages, label: 'Languages', value: personal.languages.join(', ') },
                { icon: Sparkles, label: 'Interests', value: personal.interests.join(', ') },
              ].map(({ icon: Icon, label, value }) => (
                <GlassCard key={label} className="!p-4">
                  <div className="flex items-start gap-3">
                    <Icon size={18} className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        {label}
                      </p>
                      <p className="mt-1 text-sm text-white">{value}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="mt-8">
              <p className="mb-4 text-sm font-medium text-slate-400">Career Timeline</p>
              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <motion.div
                    key={`${item.year}-${item.title}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <span className="w-12 shrink-0 text-sm font-bold text-primary">{item.year}</span>
                    <div className="border-l border-white/10 pl-4">
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
