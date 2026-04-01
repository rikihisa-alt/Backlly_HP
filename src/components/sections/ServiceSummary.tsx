"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    label: "バックオフィスコンサルティング",
    desc: "業務の棚卸し・フロー設計・運用ルール策定",
  },
  {
    label: "B-Hall（一元管理システム）",
    desc: "タスク・承認・進捗を1つの画面で管理",
  },
  {
    label: "B-Core（企業専用システム開発）",
    desc: "要件定義から納品まで一貫した開発",
  },
  {
    label: "HP・LP制作",
    desc: "企業サイト・サービスサイト・採用サイト",
  },
];

export default function ServiceSummary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section bg-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>SERVICES</SectionLabel>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy mb-4">
            提供サービス
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed mb-12 max-w-2xl">
            B-Hallによる一元管理の構築や、企業専用システムの開発、ホームページ・LP制作など、業務に直結する仕組みを実装します。全体設計だけでなく、スポットでの支援にも対応しています。
          </p>
        </motion.div>

        <div className="max-w-2xl space-y-0">
          {services.map((s, i) => (
            <motion.div
              key={s.label}
              className="border-b border-border/60 py-5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.4, ease: "easeOut" }}
            >
              <span className="text-sm font-medium text-navy sm:w-56 flex-shrink-0">
                {s.label}
              </span>
              <span className="text-sm text-text-muted">{s.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
