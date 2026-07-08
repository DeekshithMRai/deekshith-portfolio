import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experience, education } from '@/data/experience';
import { SectionHeading, GlassCard } from '@/components/ui/SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-white/[0.02]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Experience"
          title="Where I've worked & learned"
          description="Professional experience and academic foundation in computer science."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:block" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative"
              >
                <div className="md:pl-14">
                  <GlassCard>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-accent" />
                      <span className="text-xs font-medium uppercase tracking-wider text-primary">
                        {job.period}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-white">{job.role}</h3>
                    <p className="mt-1 text-accent">{job.company}</p>
                    <p className="text-sm text-slate-500">{job.location}</p>

                    <ul className="mt-4 space-y-2">
                      {job.responsibilities.map((item) => (
                        <li key={item} className="text-sm text-slate-400">
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>

                <div className="absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Education</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-primary" />
                    <span className="text-xs font-medium text-slate-500">{edu.period}</span>
                  </div>
                  <h4 className="mt-3 text-lg font-bold text-white">{edu.degree}</h4>
                  <p className="mt-1 text-sm text-accent">{edu.institution}</p>
                  <p className="mt-2 text-sm font-medium text-slate-300">{edu.detail}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
