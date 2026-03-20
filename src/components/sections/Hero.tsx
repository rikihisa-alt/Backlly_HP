"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { siteContent } from "@/data/content";

function NetworkSVG() {
  return (
    <motion.svg
      className="absolute right-0 top-0 h-full w-[45%] hidden md:block"
      viewBox="0 0 500 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Lines */}
      <line x1="120" y1="200" x2="300" y2="300" stroke="#0D1B2A" strokeWidth="0.5" opacity="0.2" />
      <line x1="300" y1="300" x2="400" y2="180" stroke="#0D1B2A" strokeWidth="0.5" opacity="0.2" />
      <line x1="300" y1="300" x2="250" y2="500" stroke="#0D1B2A" strokeWidth="0.5" opacity="0.2" />
      <line x1="250" y1="500" x2="400" y2="550" stroke="#0D1B2A" strokeWidth="0.5" opacity="0.2" />
      <line x1="400" y1="180" x2="450" y2="350" stroke="#0D1B2A" strokeWidth="0.5" opacity="0.2" />
      <line x1="450" y1="350" x2="400" y2="550" stroke="#0D1B2A" strokeWidth="0.5" opacity="0.2" />
      <line x1="120" y1="200" x2="80" y2="400" stroke="#0D1B2A" strokeWidth="0.5" opacity="0.2" />
      <line x1="80" y1="400" x2="250" y2="500" stroke="#0D1B2A" strokeWidth="0.5" opacity="0.2" />
      <line x1="250" y1="500" x2="180" y2="650" stroke="#00C2CB" strokeWidth="0.5" opacity="0.15" />
      <line x1="400" y1="550" x2="350" y2="700" stroke="#00C2CB" strokeWidth="0.5" opacity="0.15" />

      {/* Nodes with pulse */}
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
          fill="#0D1B2A"
          opacity="0.2"
          animate={{ opacity: [0.15, 0.3, 0.15], r: [3, 4, 3] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </motion.svg>
  );
}

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg-white">
      <NetworkSVG />
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <SectionLabel>BACKLLY</SectionLabel>
          </motion.div>

          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {hero.headline.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="text-text-muted text-lg md:text-xl mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {hero.subline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Button variant="primary" size="lg" href="#contact">
              {hero.ctaPrimary}
            </Button>
            <Button variant="secondary" size="lg" href="#contact">
              {hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
