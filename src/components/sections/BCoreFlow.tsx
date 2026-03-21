"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section bg-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>B-CORE</SectionLabel>
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <Image
            src="/images/logo-bcore.png"
            alt="B-Core"
            width={160}
            height={48}
            className="h-10 w-auto"
          />
        </motion.div>

        <motion.p
          className="text-text-muted text-sm md:text-base mb-20 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          企業ごとの業務に最適化されたシステムを、要件定義から設計・開発・運用まで一貫して構築します。
          テンプレートではなく、御社専用の仕組みを。
        </motion.p>

        {/* Development flow — visual timeline */}
        <div className="max-w-3xl">
          <motion.p
            className="text-xs text-text-muted font-mono tracking-wider uppercase mb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            DEVELOPMENT FLOW
          </motion.p>

          <div className="relative">
            {/* Vertical line */}
            <motion.div
              className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-border origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            />

            <div className="space-y-0">
              {flowSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  className="relative flex gap-6 pb-10 last:pb-0"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                >
                  {/* Node */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-border bg-bg-white flex items-center justify-center z-10">
                    <span className="font-mono text-xs text-cyan font-semibold">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1.5 pb-2">
                    <h3 className="font-serif text-base md:text-lg font-semibold text-navy mb-1">
                      {step.title}
                      {step.note && (
                        <span className="text-xs text-text-muted font-normal ml-2">
                          {step.note}
                        </span>
                      )}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Arrow at bottom */}
            <motion.div
              className="absolute left-[15px] bottom-[-16px]"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                <path d="M5 12L0 6H10L5 12Z" fill="#E2E8F0" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
