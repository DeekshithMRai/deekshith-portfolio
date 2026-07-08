import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { personal } from '@/data/personal';

export function FloatingResumeButton() {
    return (
        <motion.a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.03 }}
            className="fixed right-4 bottom-4 z-40 hidden items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(79,70,229,0.25)] backdrop-blur-xl md:flex"
        >
            <FileText size={16} className="text-accent" />
            View Resume
        </motion.a>
    );
}
