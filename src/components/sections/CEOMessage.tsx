"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

export default function CEOMessage() {
  const { ceoMessage } = siteContent;

  return (
    <section id="message" className="bg-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6"
        >
          <SectionLabel>MESSAGE</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-navy font-bold leading-[1.3] text-[28px] md:text-[36px] lg:text-[42px] mb-10 max-w-4xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        >
          {ceoMessage.headline}
        </motion.h2>

        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-8 space-y-6">
            {ceoMessage.body.map((paragraph, i) => (
              <motion.p
                key={i}
                className="text-text-muted text-[14px] md:text-[15px] leading-[2.05]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.06, ease: "easeOut" }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="w-10 h-[1px] bg-border mb-4" />
          <p className="text-navy font-medium text-[13.5px] tracking-wide">
            代表取締役　力久 凌太郎
          </p>
        </motion.div>
      </div>
    </section>
  );
}
