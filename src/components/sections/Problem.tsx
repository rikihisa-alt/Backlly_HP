"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

export default function Problem() {
  const { problem } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionLabel>PROBLEM</SectionLabel>

        <motion.h2
          className="font-serif text-3xl md:text-4xl font-bold text-navy mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {problem.headline}
        </motion.h2>

        <div className="max-w-2xl space-y-0">
          {problem.items.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-6 py-8 border-b border-gray-200 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            >
              <div className="w-[2px] h-8 bg-cyan flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl text-text font-medium">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
