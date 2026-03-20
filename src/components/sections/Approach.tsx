"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

export default function Approach() {
  const { approach } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section bg-bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionLabel>APPROACH</SectionLabel>

        <motion.h2
          className="font-serif text-3xl md:text-[36px] font-semibold text-navy mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {approach.headline}
        </motion.h2>

        <div className="max-w-2xl relative">
          {/* Vertical connecting line */}
          <motion.div
            className="absolute left-[11px] top-4 bottom-4 w-[1.5px] bg-border origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          <div className="space-y-12">
            {approach.steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex gap-8 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
              >
                {/* Node dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full border-2 border-border bg-bg-white flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan" />
                  </div>
                </div>

                <div className="pb-2">
                  <span className="font-mono text-xs text-cyan tracking-[0.15em] uppercase">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy mt-1.5">
                    {step.title}
                  </h3>
                  <p className="text-text-muted mt-2 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
