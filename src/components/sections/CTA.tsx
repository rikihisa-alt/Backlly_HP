"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { siteContent } from "@/data/content";

export default function CTA() {
  const { cta } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-section bg-navy relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <SectionLabel color="cyan">CONTACT</SectionLabel>

        <motion.h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {cta.headline}
        </motion.h2>

        <motion.p
          className="text-white/50 text-sm md:text-base mb-10 max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {cta.subline}
        </motion.p>

        <motion.div
          className="mb-12 space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-white/30 text-xs font-mono tracking-wider uppercase mb-3">
            相談内容例
          </p>
          {cta.examples.map((example, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-cyan/50" />
              <span className="text-white/60 text-sm">{example}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button variant="primary" size="lg">
            {cta.ctaPrimary}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
