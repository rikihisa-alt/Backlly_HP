"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const capabilities = [
  { area: "タスク管理", detail: "業務の割当・進捗・期限をチームで共有" },
  { area: "承認ワークフロー", detail: "申請→承認→記録を一本のフローで完結" },
  { area: "契約・請求管理", detail: "契約情報と請求を紐付け、漏れを防止" },
  { area: "経費精算", detail: "申請→承認→会計連携まで手作業ゼロ" },
  { area: "入退社手続き", detail: "チェックリストで抜け漏れなく自動進行" },
  { area: "会計・SaaS連携", detail: "freee・マネーフォワード等とAPI接続" },
];

export default function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-section bg-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionLabel>CAPABILITIES</SectionLabel>
          <h2 className="font-serif text-2xl md:text-[32px] font-semibold text-navy mb-3">
            Backllyで対応できること
          </h2>
          <p className="text-text-muted text-sm md:text-base mb-14 max-w-xl leading-relaxed">
            バックオフィス業務全般の設計・システム化・運用に対応します。
          </p>
        </motion.div>

        <div className="max-w-2xl space-y-0">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.area}
              className="flex items-baseline gap-6 py-4 border-b border-border/60"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.08,
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <span className="text-sm font-medium text-navy w-36 flex-shrink-0">
                {item.area}
              </span>
              <span className="text-sm text-text-muted">
                {item.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
