"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const flowSteps = [
  {
    step: "01",
    title: "ヒアリング",
    description: "業務課題・要望・現状環境を詳しくお伺いし、開発の方向性を定めます。",
  },
  {
    step: "02",
    title: "要件定義",
    description: "必要な機能・優先度・運用フローを整理し、開発仕様を確定します。",
  },
  {
    step: "03",
    title: "設計",
    description: "画面構成・データ構造・システム全体のアーキテクチャを設計します。",
  },
  {
    step: "04",
    title: "初稿",
    description: "設計に基づいた第一版を構築し、動作確認いただきます。",
  },
  {
    step: "05",
    title: "改訂",
    description: "フィードバックをもとに最大4回まで改訂を行い、精度を高めます。",
    note: "※最大4回",
  },
  {
    step: "06",
    title: "納品",
    description: "最終確認後、本番環境へデプロイ。運用マニュアルもお渡しします。",
  },
];

export default function BCoreFlow() {
  return (
    <section id="bcore" className="bg-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4"
        >
          <SectionLabel>B-CORE</SectionLabel>
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        >
          <Image
            src="/images/logo-bcore.png"
            alt="B-Core"
            width={160}
            height={48}
            className="h-10 w-auto"
          />
        </motion.div>

        <motion.h2
          className="font-serif text-navy font-bold leading-[1.3] text-[24px] md:text-[32px] lg:text-[36px] mb-5 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          企業専用システムを、<span className="text-brand">作る</span>。
        </motion.h2>

        <motion.p
          className="text-text-muted text-[14px] md:text-[15px] leading-[1.95] mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <span className="inline-block">要件定義から設計・開発・運用まで一貫対応</span>。
          テンプレートではなく、<span className="inline-block">御社専用の仕組み</span>を構築します。
        </motion.p>

        <div className="mb-5">
          <span className="font-sans font-bold text-[12px] tracking-[0.18em] text-brand">
            DEVELOPMENT FLOW
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {flowSteps.map((step, i) => (
            <motion.div
              key={step.step}
              className="bg-bg-white rounded-md border border-border p-6 md:p-7 hover:border-brand/40 transition-colors h-full"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.05 + i * 0.05, ease: "easeOut" }}
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-sans font-bold text-[14px] text-brand tabular-nums">
                  {step.step}
                </span>
                <h3 className="text-navy font-bold text-[16px] md:text-[17px] leading-snug">
                  {step.title}
                  {step.note && (
                    <span className="text-[11px] text-text-muted font-normal ml-2">
                      {step.note}
                    </span>
                  )}
                </h3>
              </div>
              <p className="text-text-muted text-[13px] leading-[1.95]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
