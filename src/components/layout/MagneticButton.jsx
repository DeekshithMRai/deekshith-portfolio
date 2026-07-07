import { useMagnetic } from '@/hooks/useMagnetic';
import { Button } from '@/components/ui/Button';

export function MagneticButton({ children, strength = 0.25, ...props }) {
  const ref = useMagnetic(strength);

  return (
    <Button magnetic magneticRef={ref} {...props}>
      {children}
    </Button>
  );
}
