"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

export default function Solution() {
  const { solution } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section bg-navy relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <SectionLabel color="cyan">SOLUTION</SectionLabel>

        <motion.h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {solution.headline}
        </motion.h2>

        <div className="max-w-2xl space-y-10">
          {solution.items.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
            >
              <div className="w-2 h-2 rounded-full bg-cyan mt-2.5 flex-shrink-0" />
              <p className="text-white text-lg md:text-xl font-medium">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 具体的な実装内容＋スポット対応 */}
        <motion.div
          className="max-w-2xl mt-16 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            B-Hallによる一元管理の構築や、企業専用システムの開発、ホームページ・LP制作など、業務に直結する仕組みを実装します。
          </p>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mt-4">
            また、全体設計だけでなく、システム開発のみ、業務改善のみといったスポットでの支援にも対応しています。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
