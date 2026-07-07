import { gsap } from './gsapSetup';

export function revealText(element, options = {}) {
  if (!element) return;

  const { delay = 0, stagger = 0.05, duration = 0.8 } = options;
  const text = element.textContent;
  element.innerHTML = '';
  element.setAttribute('aria-label', text);

  const chars = text.split('').map((char) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    span.style.transform = 'translateY(20px)';
    element.appendChild(span);
    return span;
  });

  gsap.to(chars, {
    opacity: 1,
    y: 0,
    duration,
    stagger,
    delay,
    ease: 'power3.out',
  });
}

export function fadeInUp(element, options = {}) {
  if (!element) return;

  gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.8,
      delay: options.delay || 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
}
