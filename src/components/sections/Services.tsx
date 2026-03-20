"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

function BHallMock() {
  return (
    <motion.div
      className="mt-8 mb-4 rounded-lg border border-border bg-bg-white overflow-hidden shadow-sm max-w-md"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      {/* Title bar */}
      <div className="bg-bg px-4 py-3 border-b border-border flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
        </div>
        <span className="text-xs text-text-muted ml-2 font-mono">B-Hall Dashboard</span>
      </div>
      {/* Mock content */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">承認待ち</span>
          <span className="text-xs font-mono text-cyan">3件</span>
        </div>
        <div className="h-[1px] bg-border" />
        <div className="space-y-2">
          {["経費申請 - 田中", "備品発注 - 佐藤", "休暇申請 - 鈴木"].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-1.5">
              <span className="text-xs text-text">{item}</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan/10 text-cyan font-medium">
                対応中
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

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
                    width={140}
                    height={42}
                    className="h-9 w-auto mb-3"
                  />
                ) : (
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-navy mb-3">
                    {service.name}
                  </h3>
                )}
                <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-lg">
                  {service.description}
                </p>

                {/* B-Hall UI mock */}
                {service.id === "bhall" && <BHallMock />}
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
      </div>
    </section>
  );
}
