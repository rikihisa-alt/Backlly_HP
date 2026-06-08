"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

export default function Value() {
  const { values } = siteContent;

  return (
    <section id="value" className="bg-bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6"
        >
          <SectionLabel>VALUE</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-navy font-bold leading-[1.3] text-[28px] md:text-[36px] lg:text-[42px] mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        >
          Backllyが大切にしている、4つの姿勢。
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              className="bg-bg rounded-md border border-border p-6 md:p-7 hover:border-brand/40 transition-colors"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.05, ease: "easeOut" }}
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-sans font-bold text-[14px] text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-navy font-bold text-[17px] md:text-[18px] leading-snug">
                  {value.title}
                </h3>
              </div>
              <p className="text-text-muted text-[13.5px] leading-[1.95]">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
