"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

export default function CaseStudies() {
  const { caseStudies } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="py-section bg-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionLabel>RESULTS</SectionLabel>

        <motion.h2
          className="font-serif text-2xl md:text-3xl font-semibold text-navy mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          導入事例
        </motion.h2>

        <div className="max-w-3xl space-y-0">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              className="py-8 border-b border-border last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
            >
              <h3 className="font-serif text-lg md:text-xl font-semibold text-navy mb-2">
                {cs.client}
              </h3>
              <p className="text-text-muted text-sm md:text-base mb-3">
                {cs.description}
              </p>
              <div className="flex items-start gap-2">
                <span className="text-cyan text-sm font-medium">→</span>
                <p className="text-text text-sm md:text-base font-medium">
                  {cs.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
