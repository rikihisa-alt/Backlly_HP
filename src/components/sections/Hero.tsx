"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { siteContent } from "@/data/content";

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

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-desk.jpg')" }}
      />
      {/* White overlay — photo is very subtle */}
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <SectionLabel>BACKLLY</SectionLabel>
          </motion.div>

          <motion.h1
            className="font-serif text-[40px] md:text-[56px] font-bold text-navy leading-[1.3] tracking-[-0.01em] mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            {hero.headline.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="text-text-muted text-base md:text-lg mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {hero.subline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Button variant="primary" size="lg" href="/contact">
              {hero.ctaPrimary}
            </Button>
            <Button variant="secondary" size="lg" href="/service">
              {hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
