import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete?: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            onLoadingComplete?.();
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 24);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  const stars = useMemo(
    () =>
      Array.from({ length: 16 }, (_, id) => ({
        id,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 3.5 + Math.random() * 3,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.12),transparent_42%)] dark:bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.16),transparent_46%)]" />

          {stars.map((star) => (
            <motion.span
              key={star.id}
              className="absolute h-1 w-1 rounded-full bg-foreground/30"
              style={{ top: `${star.top}%`, left: `${star.left}%` }}
              animate={{ opacity: [0.1, 0.45, 0.1], scale: [1, 1.3, 1] }}
              transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

          <div className="relative w-[min(90vw,420px)] rounded-3xl border border-border bg-card/80 p-10 backdrop-blur-sm shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center"
            >
              <p className="text-xs tracking-[0.26em] uppercase text-muted-foreground">Initializing</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">Rajdeep Roy</h1>
              <p className="mt-2 text-sm text-muted-foreground">Preparing experience</p>
            </motion.div>

            <div className="mt-10">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <motion.div
                  className="h-full rounded-full bg-foreground/85"
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.2 }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs tracking-wide text-muted-foreground">
                <span>Loading assets</span>
                <span>{progress}%</span>
              </div>
            </div>

            <motion.div
              className="pointer-events-none absolute -inset-px rounded-3xl border border-foreground/10"
              animate={{ opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
