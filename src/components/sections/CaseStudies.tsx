"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

/**
 * 事例。固有名詞は出さず、業界・規模・テーマで匿名化。
 * 仮名は HomeLanding の TRUSTED BY と整合させ「医療法人A / 株式会社B / 社会福祉法人C」を使う。
 */
const aliasByIndustry: Record<string, string> = {
  "医療・ヘルスケア": "医療法人A",
  "IT・SaaS": "株式会社B",
  "介護・福祉": "社会福祉法人C",
};

export default function CaseStudies() {
  const { caseStudies } = siteContent;

  return (
    <section id="results" className="bg-bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4"
        >
          <SectionLabel>RESULTS</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-navy font-bold leading-[1.3] text-[28px] md:text-[36px] lg:text-[42px] mb-3 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        >
          数字で見る、<span className="text-brand">変化</span>。
        </motion.h2>

        <motion.p
          className="text-text-muted text-[14px] md:text-[15px] leading-[1.95] mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          業種・規模の異なる組織で、業務の流れを再設計し、運用が回り始めた実例をご紹介します。
        </motion.p>

        <div className="space-y-5 md:space-y-6">
          {caseStudies.map((cs, i) => {
            const alias = aliasByIndustry[cs.industry] ?? cs.client;
            return (
              <motion.article
                key={i}
                className="bg-bg rounded-md border border-border p-6 md:p-8 hover:border-brand/40 transition-colors"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.05 + i * 0.05, ease: "easeOut" }}
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
                  <h3 className="text-navy font-bold text-[18px] md:text-[20px]">
                    {alias}
                  </h3>
                  <span className="text-[12px] text-text-muted">
                    {cs.industry}
                  </span>
                  <span className="text-[12px] text-text-muted">
                    {cs.description}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-8 mb-5">
                  <div>
                    <span className="font-sans font-bold text-[11.5px] tracking-[0.18em] text-brand mb-2 block">
                      課題
                    </span>
                    <p className="text-navy text-[13.5px] md:text-[14px] leading-[1.95]">
                      {cs.challenge}
                    </p>
                  </div>
                  <div>
                    <span className="font-sans font-bold text-[11.5px] tracking-[0.18em] text-brand mb-2 block">
                      支援内容
                    </span>
                    <p className="text-navy text-[13.5px] md:text-[14px] leading-[1.95]">
                      {cs.support}
                    </p>
                  </div>
                </div>

                <div className="bg-bg-white border-l-[3px] border-brand pl-5 pr-4 py-4 rounded-r">
                  <span className="font-sans font-bold text-[11.5px] tracking-[0.18em] text-brand mb-1.5 block">
                    成果
                  </span>
                  <p className="text-navy text-[14px] md:text-[15px] font-semibold leading-[1.85]">
                    {cs.result}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
