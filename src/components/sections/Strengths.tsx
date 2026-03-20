"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

export default function Strengths() {
  const { strengths } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section bg-bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <SectionLabel>STRENGTH</SectionLabel>

        <motion.h2
          className="font-serif text-2xl md:text-3xl font-semibold text-navy mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Backllyの強み
        </motion.h2>

        <div className="space-y-10">
          {strengths.map((strength, i) => (
            <motion.div
              key={i}
              className="flex gap-6 md:gap-10"
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            >
              <span className="font-mono text-2xl md:text-3xl text-cyan/30 flex-shrink-0 leading-none pt-0.5 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-navy mb-2">
                  {strength.title}
                </h3>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
