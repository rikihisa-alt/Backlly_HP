"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

export default function ConsultTopics() {
  const { consultTopics } = siteContent;

  return (
    <section id="consult" className="bg-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4"
        >
          <SectionLabel>CONSULT</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-navy font-bold leading-[1.3] text-[28px] md:text-[36px] lg:text-[42px] mb-3 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        >
          こんなことが、相談できます。
        </motion.h2>

        <motion.p
          className="text-text-muted text-[14px] md:text-[15px] leading-[1.95] mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          以下のようなご相談に対応しています。<span className="inline-block">お悩み段階のご相談からで大丈夫です。</span>
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {consultTopics.map((topic, i) => (
            <motion.div
              key={i}
              className="bg-bg-white rounded-md border border-border p-6 md:p-7 hover:border-brand/40 transition-colors h-full"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.05 + i * 0.05, ease: "easeOut" }}
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-sans font-bold text-[14px] text-brand tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-navy font-bold text-[16px] md:text-[17px] leading-snug">
                  {topic.title}
                </h3>
              </div>
              <p className="text-text-muted text-[13px] leading-[1.95]">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
