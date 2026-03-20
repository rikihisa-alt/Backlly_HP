"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

export default function Trust() {
  const { trust } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>TRUST</SectionLabel>
        </motion.div>

        {/* Target companies */}
        <motion.h3
          className="font-serif text-xl md:text-2xl font-bold text-navy mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {trust.targetHeadline}
        </motion.h3>

        <div className="space-y-4 mb-16">
          {trust.targets.map((target, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan mt-2.5 flex-shrink-0" />
              <p className="text-text text-base md:text-lg">{target}</p>
            </motion.div>
          ))}
        </div>

        {/* Scope */}
        <motion.h3
          className="font-serif text-xl md:text-2xl font-bold text-navy mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {trust.scopeHeadline}
        </motion.h3>

        <div className="space-y-4">
          {trust.scopes.map((scope, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan mt-2.5 flex-shrink-0" />
              <p className="text-text text-base md:text-lg">{scope}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
