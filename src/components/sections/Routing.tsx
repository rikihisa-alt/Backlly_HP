"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

export default function Routing() {
  const { routing } = siteContent;

  return (
    <section id="routing" className="bg-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4"
        >
          <SectionLabel>FOR YOU</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-navy font-bold leading-[1.3] text-[28px] md:text-[36px] lg:text-[42px] mb-3 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        >
          課題の段階に合わせて、<span className="text-brand">支援</span>します。
        </motion.h2>

        <motion.p
          className="text-text-muted text-[14px] md:text-[15px] leading-[1.95] mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          現状に最も近いものを選んでください。次に取るべき一歩をご案内します。
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {routing.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.07, ease: "easeOut" }}
            >
              <Link
                href={item.href}
                className="group block h-full bg-bg-white rounded-md border border-border p-6 md:p-7 hover:border-brand/40 transition-colors"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-sans font-bold text-[13px] text-brand tracking-wide">
                    {item.label}
                  </span>
                  <span className="text-[11.5px] text-text-muted">
                    {item.service}
                  </span>
                </div>
                <h3 className="text-navy font-bold text-[16px] md:text-[17px] leading-snug mb-2.5">
                  {item.target}
                </h3>
                <p className="text-text-muted text-[13px] leading-[1.85] mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-2 text-navy text-[13px] font-semibold border-b border-navy/30 pb-0.5 group-hover:border-navy transition-colors whitespace-nowrap">
                  <span>詳しく見る</span>
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
