import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '@/data/skills';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/utils/cn';

function SkillCard({ group, isActive, onHover }) {
  const Icon = group.icon;

  return (
    <motion.div
      onMouseEnter={() => onHover(group.id)}
      onMouseLeave={() => onHover(null)}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className={cn(
        'glass-hover rounded-[28px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.2)] transition-all duration-500',
        isActive && 'border-accent/30 shadow-[0_0_55px_rgba(34,211,238,0.18)]'
      )}
      style={{
        transform: isActive ? 'perspective(800px) translateZ(0)' : undefined,
      }}
    >
      <div className="mb-5 flex items-center gap-4">
        <div className={cn('flex h-14 w-14 items-center justify-center rounded-3xl text-white', group.accent)}>
          <Icon size={22} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{group.title}</h3>
          <p className="text-sm text-slate-400">{group.skills.length} technologies</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {group.skills.map((skill) => {
          const SkillIcon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                <SkillIcon size={16} color={skill.color} />
              </div>
              <span>{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeGroup, setActiveGroup] = useState(null);

  const floatingSkills = skillGroups.flatMap((group) => group.skills.slice(0, 3));

  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="What I build and work with"
          description="A service-style skill overview with polished group cards and animated technology highlights."
        />

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_28px_90px_rgba(15,23,42,0.2)]">
          <div className="pointer-events-none absolute inset-x-0 top-6 overflow-hidden">
            <motion.div
              className="flex gap-4 px-4"
              initial={{ x: '100%' }}
              animate={{ x: ['100%', '-120%'] }}
              transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
            >
              {floatingSkills.concat(floatingSkills).map((skill, index) => {
                const SkillIcon = skill.icon;
                return (
                  <div
                    key={`${skill.name}-${index}`}
                    className="flex min-w-[150px] items-center gap-3 rounded-full border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 shadow-[0_0_20px_rgba(0,0,0,0.12)] backdrop-blur-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                      <SkillIcon size={16} color={skill.color} />
                    </div>
                    <span className="font-semibold text-white">{skill.name}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="pt-24 grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <SkillCard
                  group={group}
                  isActive={activeGroup === group.id}
                  onHover={setActiveGroup}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
