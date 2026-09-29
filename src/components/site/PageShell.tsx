import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden bg-ink">
      <motion.img
        src={image}
        alt={alt}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-16 lg:px-12 lg:pb-24">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          className="mt-5 max-w-3xl text-4xl leading-[1.05] text-bone sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-bone/70"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
