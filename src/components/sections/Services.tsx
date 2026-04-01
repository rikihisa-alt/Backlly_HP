"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

function FlowArrowDown() {
  return (
    <div className="flex justify-start pl-[2px] py-3">
      <svg width="24" height="28" viewBox="0 0 24 28" fill="none" className="text-border">
        <line x1="12" y1="0" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 16L12 24L18 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function Services() {
  const { services, differentiator } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-section bg-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionLabel>SERVICES</SectionLabel>

        <motion.h2
          className="font-serif text-3xl md:text-[36px] font-semibold text-navy mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          整える → 回す → 作る
        </motion.h2>

        <motion.p
          className="text-text-muted text-sm md:text-base mb-16 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {differentiator.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </motion.p>

        {/* Vertical service list */}
        <div className="max-w-3xl">
          {services.map((service, i) => (
            <div key={service.id}>
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
              >
                <span className="font-mono text-xs text-cyan tracking-[0.15em] uppercase mb-2">
                  {service.label} — {service.tagline}
                </span>
                {service.logo ? (
                  <Image
                    src={service.logo}
                    alt={service.name}
                    width={200}
                    height={60}
                    className="mb-3 block"
                    style={{ height: "36px", width: "auto", maxWidth: "200px", objectFit: "contain", objectPosition: "left" }}
                  />
                ) : (
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-navy mb-3">
                    {service.name}
                  </h3>
                )}
                <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-lg">
                  {service.description}
                </p>
              </motion.div>

              {i < services.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
                >
                  <FlowArrowDown />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* 支援の柔軟性 */}
        <motion.div
          className="max-w-3xl mt-20 pt-16 border-t border-border"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy mb-6">
            一貫支援も、スポット対応も。
          </h3>

          <div className="space-y-4 text-text-muted text-sm md:text-base leading-relaxed">
            <p>
              Backllyは、企業ごとの状況に合わせて、バックオフィスの設計・システム構築・運用改善までを一貫して支援します。
            </p>
            <p>
              業務が整理されていない段階であれば、コンサルティングから入り、フロー設計・ルール整備・業務整理を行います。そのうえで必要に応じて、B-Hallの導入や、企業専用システムの開発まで対応します。
            </p>
            <p>
              すでに一部が整っている場合は、以下のようなスポット支援も可能です。
            </p>
          </div>

          <div className="mt-6 space-y-2">
            {[
              "業務整理のみ",
              "システム開発のみ",
              "運用改善のみ",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                <span className="text-sm text-navy">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-text-muted text-sm md:text-base leading-relaxed">
            企業ごとに異なる状態を前提に、最適な範囲と進め方を設計します。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
