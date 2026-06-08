"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

interface PriceItem {
  label: string;
  price: string;
}

interface ServiceBlock {
  step: string;
  headline: string;
  description: string;
  prices: PriceItem[];
}

const services: ServiceBlock[] = [
  {
    step: "整える",
    headline: "バックオフィスコンサルティング",
    description:
      "バックオフィスの業務整理、フロー設計、改善提案までを行います。",
    prices: [
      { label: "初回相談", price: "無料" },
      { label: "スタンダード", price: "10万〜30万円" },
      { label: "フル設計", price: "50万〜100万円" },
    ],
  },
  {
    step: "回す",
    headline: "B-Hall（バックオフィス一元管理システム）",
    description:
      "業務の一元管理・可視化・運用を支える、自社開発のSaaSです。",
    prices: [
      { label: "Starter", price: "月額3万円" },
      { label: "Standard", price: "月額5万〜10万円" },
      { label: "Enterprise", price: "月額15万円〜" },
    ],
  },
  {
    step: "作る",
    headline: "B-Core（企業専用システム開発）",
    description:
      "企業ごとの業務に最適化されたシステムを、要件定義から設計・開発します。",
    prices: [
      { label: "小規模開発", price: "50万〜150万円" },
      { label: "中規模開発", price: "200万〜500万円" },
      { label: "大規模開発", price: "500万〜1500万円" },
    ],
  },
  {
    step: "サポート",
    headline: "運用サポート・保守",
    description: "開発後の改善・運用・問い合わせ対応を継続的に行います。",
    prices: [{ label: "月額", price: "5万〜20万円" }],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4"
        >
          <SectionLabel>PRICING</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-navy font-bold leading-[1.3] text-[28px] md:text-[36px] lg:text-[42px] mb-3 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        >
          必要なところに、必要な分だけ。
        </motion.h2>

        <motion.p
          className="text-text-muted text-[14px] md:text-[15px] leading-[1.95] mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          業務の整理から運用・開発まで、企業の状況に合わせて段階的にご提案します。
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-bg rounded-md border border-border p-6 md:p-7 hover:border-brand/40 transition-colors h-full flex flex-col"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.05 + i * 0.05, ease: "easeOut" }}
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-sans font-bold text-[13px] text-brand tracking-wide">
                  {service.step}
                </span>
                <h3 className="text-navy font-bold text-[16px] md:text-[17px] leading-snug">
                  {service.headline}
                </h3>
              </div>
              <p className="text-text-muted text-[13px] leading-[1.95] mb-5">
                {service.description}
              </p>

              <div className="mt-auto space-y-2 border-t border-border pt-4">
                {service.prices.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-baseline justify-between"
                  >
                    <span className="text-navy text-[13px]">{item.label}</span>
                    <span className="text-navy text-[14px] font-semibold tabular-nums">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 max-w-3xl bg-bg rounded-md border border-border p-6 md:p-7"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-text-muted text-[13.5px] md:text-[14px] leading-[1.95]">
            本サービスは単発ではなく「整理 → 運用 → 開発」まで一貫して対応します。
            コンサルのみ、システム開発のみのご依頼も可能ですが、業務整理からの実施を推奨しています。
          </p>
        </motion.div>

        <motion.div
          className="mt-12 max-w-3xl bg-navy text-white rounded-md p-7 md:p-9"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="font-serif text-white font-bold text-[22px] md:text-[24px] mb-3">
            まずは概算から、お話ししませんか。
          </h3>
          <p className="text-white/75 text-[13.5px] md:text-[14px] leading-[1.95] mb-6 max-w-xl">
            現状をお聞かせいただければ、想定費用と進め方の概算をお伝えします。初回相談は無料です。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-between gap-8 bg-brand hover:bg-brand-dark text-white font-medium text-[15px] rounded px-7 py-3.5 transition-colors min-w-[200px]"
          >
            <span>無料相談</span>
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
