import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { MagneticButton } from '@/components/layout/MagneticButton';

export function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className="space-y-6">
        <div className="overflow-hidden rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            className="aspect-video w-full object-cover"
          />
        </div>

        <div>
          <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
            Overview
          </h3>
          <p className="text-slate-300">{project.overview}</p>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
            Architecture
          </h3>
          <p className="text-slate-300">{project.architecture}</p>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
            Features
          </h3>
          <ul className="list-inside list-disc space-y-1 text-slate-300">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
              Challenges
            </h3>
            <ul className="space-y-1 text-sm text-slate-400">
              {project.challenges.map((c) => (
                <li key={c}>• {c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
              Learnings
            </h3>
            <ul className="space-y-1 text-sm text-slate-400">
              {project.learnings.map((l) => (
                <li key={l}>• {l}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <MagneticButton
            size="sm"
            onClick={() => window.open(project.github, '_blank')}
          >
            <Github size={16} />
            View Code
          </MagneticButton>
          {project.liveDemo && (
            <MagneticButton
              variant="secondary"
              size="sm"
              onClick={() => window.open(project.liveDemo, '_blank')}
            >
              <ExternalLink size={16} />
              Live Demo
            </MagneticButton>
          )}
        </div>

        {project.gallery?.length > 1 && (
          <div>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-accent">
              Gallery
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {project.gallery.map((img) => (
                <img
                  key={img}
                  src={img}
                  alt={`${project.title} screenshot`}
                  className="rounded-lg object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
