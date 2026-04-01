"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

function NetworkSVG() {
  return (
    <motion.svg
      className="absolute right-0 top-0 h-full w-[50%] hidden md:block"
      viewBox="0 0 500 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {[
        [120, 200, 300, 300],
        [300, 300, 400, 180],
        [300, 300, 250, 500],
        [250, 500, 400, 550],
        [400, 180, 450, 350],
        [450, 350, 400, 550],
        [120, 200, 80, 400],
        [80, 400, 250, 500],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={`l${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#0F172A"
          strokeWidth="0.5"
          opacity="0.08"
        />
      ))}
      <line x1="250" y1="500" x2="180" y2="650" stroke="#06B6D4" strokeWidth="0.5" opacity="0.08" />
      <line x1="400" y1="550" x2="350" y2="700" stroke="#06B6D4" strokeWidth="0.5" opacity="0.08" />

      {[
        { cx: 120, cy: 200 },
        { cx: 300, cy: 300 },
        { cx: 400, cy: 180 },
        { cx: 250, cy: 500 },
        { cx: 400, cy: 550 },
        { cx: 450, cy: 350 },
        { cx: 80, cy: 400 },
        { cx: 180, cy: 650 },
        { cx: 350, cy: 700 },
      ].map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r="3"
          fill={i >= 7 ? "#06B6D4" : "#0F172A"}
          opacity="0.12"
          animate={{ opacity: [0.06, 0.15, 0.06], r: [3, 4, 3] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </motion.svg>
  );
}

const headline = "業務をつなぎ、会社を動かす。";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-desk.jpg')" }}
      />
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/[0.95]" />

      {/* Thin grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <NetworkSVG />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="max-w-2xl py-section">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            <SectionLabel>BACKLLY</SectionLabel>
          </motion.div>

          <motion.h1
            className="font-serif text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold text-navy leading-[1.3] tracking-[-0.01em] mb-6 whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          >
            {headline}
          </motion.h1>

          {/* Sub copy — what the company does */}
          <motion.p
            className="text-text-muted text-base md:text-lg leading-relaxed mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }}
          >
            バックオフィスの業務設計から、システム構築、運用定着まで。
          </motion.p>

          {/* Service tags */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
          >
            {[
              "バックオフィスコンサル",
              "システム開発",
              "HP・LP制作",
              "業務改善・DX支援",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs text-navy/70 border border-navy/15 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            className="text-text-muted/70 text-sm md:text-base leading-relaxed mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
          >
            経理・労務・総務の属人化を解消し、人が変わっても止まらない仕組みをつくります。
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5, ease: "easeOut" }}
          >
            <Button variant="primary" size="lg" href="/contact">
              無料相談
            </Button>
            <Button variant="secondary" size="lg" href="/service">
              サービスを見る
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
