"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * /about ページ用、サービスを4行で要約するブロック。
 * サービスの詳細は /service へ誘導する。
 *
 * 表記ルール（プロジェクト統一）:
 *   - 「バックオフィスコンサルティング（整える）」
 *   - 「B-Hall = バックオフィス一元管理システム（回す）」
 *   - 「B-Core = 企業専用システム開発（作る）」
 *   - 「HP・LP制作 = ホームページ・ランディングページ制作（届ける）」
 */
const services = [
  {
    label: "整える",
    name: "バックオフィスコンサルティング",
    desc: "業務の棚卸し・フロー設計・運用ルール策定",
  },
  {
    label: "回す",
    name: "B-Hall（バックオフィス一元管理システム）",
    desc: "申請・承認・タスク・進捗を1つの画面で管理",
  },
  {
    label: "作る",
    name: "B-Core（企業専用システム開発）",
    desc: "要件定義から開発・API連携まで一貫対応",
  },
  {
    label: "届ける",
    name: "HP・LP制作（ホームページ・ランディングページ制作）",
    desc: "企業サイト・サービスサイト・採用サイトの設計と制作",
  },
];

export default function ServiceSummary() {
  return (
    <section id="services" className="bg-bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4"
        >
          <SectionLabel>SERVICES</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-navy font-bold leading-[1.3] text-[28px] md:text-[36px] lg:text-[42px] mb-5 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        >
          整える、回す、作る、<span className="text-brand">届ける</span>。
        </motion.h2>

        <motion.p
          className="text-text-muted text-[14px] md:text-[15px] leading-[1.95] mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <span className="inline-block">バックオフィスを機能させる</span>ための4つのサービス。
          コンサルティング、一元管理システム、業務システム開発、Webサイト制作までを一貫してご提供します。
        </motion.p>

        <div className="max-w-3xl">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              className="border-b border-border py-5 grid grid-cols-1 sm:grid-cols-[88px_1fr] gap-2 sm:gap-6 items-baseline first:border-t"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease: "easeOut" }}
            >
              <span className="font-sans font-bold text-[13px] text-brand tracking-wide">
                {s.label}
              </span>
              <div>
                <p className="text-navy text-[14.5px] font-semibold mb-1">
                  {s.name}
                </p>
                <p className="text-text-muted text-[13px] leading-[1.85]">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Link
            href="/service"
            className="inline-flex items-center gap-3 text-navy text-[14px] font-semibold border-b border-navy/30 hover:border-navy pb-1 transition-colors whitespace-nowrap"
          >
            <span>サービスの詳細を見る</span>
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
