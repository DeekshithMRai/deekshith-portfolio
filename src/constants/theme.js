import { certificates } from '@/data/certificates';

export const theme = {
  colors: {
    primary: '#4F46E5',
    accent: '#22D3EE',
    background: '#050816',
    surface: 'rgba(255,255,255,0.08)',
    text: '#F8FAFC',
    muted: '#94A3B8',
  },
  radius: '20px',
  blur: '20px',
};

export const stats = {
  experience: { value: 1.5, suffix: '+', label: 'Years Experience' },
  projects: { value: 10, suffix: '+', label: 'Projects' },
  technologies: { value: 15, suffix: '+', label: 'Technologies' },
  certificates: { value: certificates.length, suffix: '', label: 'Certificates' },
};
