"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const flowSteps = [
  { label: "入社", desc: "手続き・アカウント発行" },
  { label: "労務", desc: "勤怠・社保・給与" },
  { label: "経理", desc: "請求・支払い・仕訳" },
  { label: "承認", desc: "申請・決裁・記録" },
  { label: "報告", desc: "月次集計・経営数字" },
];

export default function FlowLine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-section bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionLabel>FLOW</SectionLabel>
          <h2 className="font-serif text-2xl md:text-[32px] font-semibold text-navy mb-3">
            業務は、つながって初めて機能する。
          </h2>
          <p className="text-text-muted text-sm md:text-base mb-14 max-w-xl leading-relaxed">
            入社から月次報告まで、バックオフィスの業務は1本の流れです。
            <br />
            どこか1つが止まると、全体が滞る。Backllyはこの流れを設計します。
          </p>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-start gap-0">
          {flowSteps.map((step, i) => (
            <div key={step.label} className="flex items-start">
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.3 + i * 0.15,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <div className="w-10 h-10 rounded-full border border-navy/15 flex items-center justify-center mb-3 bg-white">
                  <span className="font-mono text-[11px] text-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm font-medium text-navy mb-1">
                  {step.label}
                </p>
                <p className="text-[11px] text-text-muted leading-snug w-24">
                  {step.desc}
                </p>
              </motion.div>

              {/* Connecting line */}
              {i < flowSteps.length - 1 && (
                <motion.div
                  className="flex items-center mt-5 mx-2"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={
                    isInView ? { scaleX: 1, opacity: 1 } : {}
                  }
                  transition={{
                    delay: 0.5 + i * 0.15,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  style={{ originX: 0 }}
                >
                  <div className="w-12 lg:w-20 h-[1px] bg-border" />
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    className="text-border -ml-1"
                  >
                    <path
                      d="M1 1L5 4L1 7"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="flex md:hidden flex-col gap-0">
          {flowSteps.map((step, i) => (
            <div key={step.label}>
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: 0.3 + i * 0.12,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <div className="w-8 h-8 rounded-full border border-navy/15 flex items-center justify-center flex-shrink-0 bg-white">
                  <span className="font-mono text-[10px] text-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">
                    {step.label}
                  </p>
                  <p className="text-[11px] text-text-muted">
                    {step.desc}
                  </p>
                </div>
              </motion.div>

              {i < flowSteps.length - 1 && (
                <motion.div
                  className="ml-[15px] py-1"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
                  transition={{
                    delay: 0.4 + i * 0.12,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  style={{ originY: 0 }}
                >
                  <div className="w-[1px] h-6 bg-border" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
