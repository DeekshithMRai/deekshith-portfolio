import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectModal } from './ProjectModal';
import { cn } from '@/utils/cn';

function ProjectCard({ project, index, onSelect }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(project)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      className="group cursor-pointer"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
    >
      <div className={cn(
        'glass-hover overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-0 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]',
        'transition-all duration-500 group-hover:-translate-y-1 group-hover:border-amber-300/70 group-hover:shadow-[0_0_35px_rgba(245,158,11,0.16)]',
        'max-w-[900px] mx-auto'
      )}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            loading="lazy"
            initial={{ x: 140, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
            Featured
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/12 backdrop-blur-sm transition-colors hover:bg-primary"
              aria-label="GitHub repository"
            >
              <Github size={14} />
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/12 backdrop-blur-sm transition-colors hover:bg-accent"
                aria-label="Live demo"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-white transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-slate-400">
            {project.shortDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding bg-white/[0.02]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Projects"
          title="Featured work"
          description="Real-world projects spanning full-stack development, AI/ML, and IoT."
        />

        <div className="space-y-10 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div key={project.id} className="min-h-[92vh]">
              <div className="sticky top-28">
                <ProjectCard
                  project={project}
                  index={i}
                  onSelect={setSelectedProject}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
