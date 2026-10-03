import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { fullModules, type Shot } from "@/lib/photos";

/**
 * Full-screen photo viewer. The parent owns `index` (null = closed) so that
 * the list it browses through stays in sync with whatever filter is active.
 */
export function Lightbox({
  shots,
  index,
  onIndexChange,
}: {
  shots: Shot[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
}) {
  const active = index === null ? undefined : shots[index];
  const [fullSrc, setFullSrc] = useState<string | null>(null);

  const close = useCallback(() => onIndexChange(null), [onIndexChange]);
  const step = useCallback(
    (dir: number) => {
      if (index === null || shots.length === 0) return;
      onIndexChange((index + dir + shots.length) % shots.length);
    },
    [index, shots.length, onIndexChange],
  );

  useEffect(() => {
    if (!active) {
      setFullSrc(null);
      return;
    }
    setFullSrc(null);
    let cancelled = false;
    const loader = fullModules[active.fullPath];
    if (!loader) {
      setFullSrc(active.thumb);
      return;
    }
    loader().then((src) => {
      if (!cancelled) setFullSrc(src);
    });
    return () => {
      cancelled = true;
    };
  }, [active]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  return (
    <AnimatePresence>
      {active && index !== null ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/96 p-4 sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute top-6 right-6 text-bone/70 transition-colors hover:text-bone"
          >
            <X className="size-7" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-4 text-bone/60 transition-colors hover:text-bone sm:left-8"
          >
            <ChevronLeft className="size-9" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-4 text-bone/60 transition-colors hover:text-bone sm:right-8"
          >
            <ChevronRight className="size-9" />
          </button>

          <motion.figure
            key={active.key}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={fullSrc ?? active.thumb}
              alt={active.alt}
              className="max-h-[78vh] w-full object-contain"
            />
            <figcaption className="mt-5 text-center text-[0.6875rem] tracking-[0.2em] text-bone/55 uppercase">
              {active.label} — {index + 1} / {shots.length}
            </figcaption>
          </motion.figure>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
