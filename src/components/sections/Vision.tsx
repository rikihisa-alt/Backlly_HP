"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

export default function Vision() {
  const { vision } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-section relative overflow-hidden" ref={ref}>
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-meeting.jpg')" }}
      />
      <div className="absolute inset-0 bg-white/[0.93]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>VISION</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-3xl md:text-[36px] font-semibold text-navy mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {vision.headline}
        </motion.h2>

        <div className="space-y-6 max-w-2xl">
          {vision.body.map((paragraph, i) => (
            <motion.p
              key={i}
              className="text-text-muted text-sm md:text-base leading-[2]"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
