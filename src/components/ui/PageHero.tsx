"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  image: string;
}

export default function PageHero({ label, title, image }: PageHeroProps) {
  return (
    <section className="relative h-[260px] md:h-[340px] flex items-end overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-navy/[0.82]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10 pb-6 md:pb-16">
        <motion.p
          className="font-mono text-xs tracking-[0.2em] uppercase text-cyan mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {label}
        </motion.p>
        <motion.h1
          className="font-serif text-2xl md:text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
