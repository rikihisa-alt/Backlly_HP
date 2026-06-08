"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

/**
 * VISION
 * /about のメインビジュアル直下に置く理念ブロック。
 * 大型・余白厚め・bg-bg-white。
 */
export default function Vision() {
  const { vision } = siteContent;

  return (
    <section id="vision" className="bg-bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6"
        >
          <SectionLabel>VISION</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-brand font-bold leading-[1.35] text-[28px] md:text-[40px] lg:text-[48px] mb-10 max-w-4xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        >
          {vision.headline}
        </motion.h2>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8 space-y-6">
            {vision.body.map((paragraph, i) => (
              <motion.p
                key={i}
                className="text-text-muted text-[14px] md:text-[15px] leading-[2.05]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: "easeOut" }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
