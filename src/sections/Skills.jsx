import { useState } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { skillGroups } from '@/data/skills';
import { SectionHeading, GlassCard } from '@/components/ui/SectionHeading';
import { cn } from '@/utils/cn';

function SkillCard({ group, isActive, onHover }) {
  const Icon = LucideIcons[group.icon] || LucideIcons.Code2;

  return (
    <motion.div
      onMouseEnter={() => onHover(group.id)}
      onMouseLeave={() => onHover(null)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'glass-hover cursor-default rounded-xl p-6 transition-all duration-500',
        isActive && 'border-accent/30 shadow-glow-accent'
      )}
      style={{
        transform: isActive ? 'perspective(800px) rotateX(2deg) rotateY(-2deg)' : undefined,
      }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
          <Icon size={20} className="text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-white">{group.title}</h3>
      </div>

      <div className="space-y-3">
        {group.skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-slate-300">{skill.name}</span>
              <span className="text-slate-500">{skill.level}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeGroup, setActiveGroup] = useState(null);

  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          description="Interactive skill groups spanning frontend, backend, databases, and tools."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
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
    </section>
  );
}
