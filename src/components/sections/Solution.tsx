"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

const IconCheck = (p: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className={p.className}
  >
    <path d="M5 12l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Solution() {
  const { solution } = siteContent;

  return (
    <section id="solution" className="bg-bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4"
        >
          <SectionLabel>SOLUTION</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-navy font-bold leading-[1.3] text-[28px] md:text-[36px] lg:text-[42px] mb-3 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        >
          フローを<span className="text-brand">設計</span>すれば、業務は回る。
        </motion.h2>

        <motion.p
          className="text-text-muted text-[14px] md:text-[15px] leading-[1.95] mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          属人化していた業務を構造化し、<span className="inline-block">システムで支える。</span>
          その結果として、<span className="inline-block">現場に生まれる変化です。</span>
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {solution.items.map((item, i) => (
            <motion.div
              key={i}
              className="flex gap-4 bg-bg rounded-md border border-border p-5 md:p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.05 + i * 0.05, ease: "easeOut" }}
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
                <IconCheck className="w-4 h-4 text-brand" />
              </div>
              <p className="text-navy text-[14px] md:text-[14.5px] leading-[1.9]">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 max-w-3xl bg-bg rounded-md border border-border p-6 md:p-7"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-text-muted text-[13.5px] md:text-[14px] leading-[1.95]">
            <span className="inline-block">B-Hallによる一元管理の構築</span>、<span className="inline-block">企業専用システムの開発</span>、<span className="inline-block">HP・LP制作</span>など、業務に直結する仕組みを実装します。
            全体設計だけでなく、システム開発のみ、業務改善のみといったスポット支援も可能です。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
