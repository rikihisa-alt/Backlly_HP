"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

export default function CEOMessage() {
  const { ceoMessage } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-36 bg-bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>MESSAGE</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-2xl md:text-3xl font-bold text-navy mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {ceoMessage.headline}
        </motion.h2>

        <div className="space-y-6">
          {ceoMessage.body.map((paragraph, i) => (
            <motion.p
              key={i}
              className="text-text-muted text-base md:text-lg leading-loose"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.p
          className="text-navy font-medium text-sm mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          代表取締役　力久 凌太郎
        </motion.p>
      </div>
    </section>
  );
}
