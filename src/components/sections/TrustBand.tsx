"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/data/content";

export default function TrustBand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const { trustStats } = siteContent;

  return (
    <section className="py-20 md:py-28 bg-bg-white border-y border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Client logos placeholder */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-text-muted font-mono tracking-wider uppercase mb-8">
            TRUSTED BY
          </p>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
            {["医療法人A", "株式会社B", "社会福祉法人C", "合同会社D", "株式会社E"].map(
              (name, i) => (
                <motion.div
                  key={i}
                  className="text-text-muted/30 text-sm font-medium tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                >
                  {name}
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          {trustStats.map((stat, i) => (
            <motion.div
              key={i}
              className="min-w-[120px]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            >
              <p className="font-mono text-3xl md:text-4xl font-semibold text-navy tracking-tight">
                {stat.value}
              </p>
              <p className="text-text-muted text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
