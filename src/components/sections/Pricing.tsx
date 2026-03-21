"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

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
    headline: "業務整理・コンサルティング",
    description:
      "バックオフィスの業務整理、フロー設計、改善提案を行います。",
    prices: [
      { label: "初回相談", price: "無料" },
      { label: "スタンダード", price: "10万〜30万円" },
      { label: "フル設計", price: "50万〜100万円" },
    ],
  },
  {
    step: "回す",
    headline: "バックオフィス基盤（B-Hall）",
    description:
      "業務の一元管理・可視化・運用を支えるシステムです。",
    prices: [
      { label: "Starter", price: "月額3万円" },
      { label: "Standard", price: "月額5万〜10万円" },
      { label: "Enterprise", price: "月額15万円〜" },
    ],
  },
  {
    step: "作る",
    headline: "システム開発（B-Core）",
    description:
      "企業ごとの業務に最適化されたシステムを設計・開発します。",
    prices: [
      { label: "小規模開発", price: "50万〜150万円" },
      { label: "中規模開発", price: "200万〜500万円" },
      { label: "大規模開発", price: "500万〜1500万円" },
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-section bg-bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>PRICING</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-3xl md:text-[36px] font-semibold text-navy mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          料金体系
        </motion.h2>

        <motion.p
          className="text-text-muted text-sm md:text-base mb-20"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          業務の整理から運用・開発まで、段階的にご提案します。
        </motion.p>

        {/* Service blocks */}
        <div className="space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="border-b border-border pb-16 last:border-b-0 last:pb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
            >
              <span className="font-mono text-xs text-cyan tracking-[0.15em] uppercase">
                {service.step}
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy mt-2 mb-3">
                {service.headline}
              </h3>
              <p className="text-text-muted text-sm md:text-base mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-4">
                {service.prices.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-baseline justify-between max-w-md"
                  >
                    <span className="text-text text-sm">{item.label}</span>
                    <span className="text-navy text-sm md:text-base font-medium tabular-nums">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* 運用・保守 */}
          <motion.div
            className="border-b border-border pb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span className="font-mono text-xs text-cyan tracking-[0.15em] uppercase">
              SUPPORT
            </span>
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy mt-2 mb-3">
              運用サポート・保守
            </h3>
            <p className="text-text-muted text-sm md:text-base mb-8 leading-relaxed">
              開発後の改善・運用・サポートを継続的に行います。
            </p>
            <div className="flex items-baseline justify-between max-w-md">
              <span className="text-text text-sm">月額</span>
              <span className="text-navy text-sm md:text-base font-medium tabular-nums">
                5万〜20万円
              </span>
            </div>
          </motion.div>
        </div>

        {/* 補足説明 */}
        <motion.div
          className="mt-16 pl-6 border-l-2 border-border space-y-4"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-text-muted text-sm leading-[2]">
            本サービスは単発ではなく、「整理 → 運用 → 開発」まで一貫して対応します。
          </p>
          <p className="text-text-muted text-sm leading-[2]">
            コンサルのみ、システム開発のみのご依頼も可能ですが、業務整理からの実施を推奨しています。
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 pt-16 border-t border-border"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-navy mb-4">
            まずは整理から。
          </h3>
          <p className="text-text-muted text-sm md:text-base mb-8">
            現状の課題を整理し、最適な進め方をご提案します。
          </p>
          <Button variant="primary" size="lg" href="#contact">
            無料相談する
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
