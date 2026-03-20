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
    <section className="py-32 bg-bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionLabel>WHY BACKLLY</SectionLabel>

        <div className="space-y-12 mt-16">
          {strengths.map((strength, i) => (
            <motion.div
              key={i}
              className="flex items-baseline gap-6 md:gap-10"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            >
              <span className="font-mono text-3xl md:text-4xl text-cyan/50 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-navy">
                {strength.text}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
