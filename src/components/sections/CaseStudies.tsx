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
              className="py-10 border-b border-border last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
            >
              {/* Header row */}
              <div className="flex items-baseline gap-4 mb-4">
                <h3 className="font-serif text-lg md:text-xl font-semibold text-navy">
                  {cs.client}
                </h3>
                <span className="text-xs text-text-muted font-mono">
                  {cs.industry}
                </span>
              </div>

              {/* Detail rows */}
              <div className="space-y-3 mb-5">
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                  <span className="text-xs text-text-muted w-16 flex-shrink-0 pt-0.5">
                    課題
                  </span>
                  <p className="text-text text-sm leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                  <span className="text-xs text-text-muted w-16 flex-shrink-0 pt-0.5">
                    支援内容
                  </span>
                  <p className="text-text text-sm leading-relaxed">
                    {cs.support}
                  </p>
                </div>
              </div>

              {/* Result */}
              <div className="flex items-start gap-2 pl-0 sm:pl-20">
                <span className="text-cyan text-sm font-medium mt-0.5">→</span>
                <p className="text-navy text-sm md:text-base font-semibold">
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
