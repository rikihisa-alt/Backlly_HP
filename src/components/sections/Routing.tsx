"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

export default function Routing() {
  const { routing } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section bg-bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionLabel>FOR YOU</SectionLabel>

        <motion.h2
          className="font-serif text-3xl md:text-4xl font-bold text-navy mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {routing.headline}
        </motion.h2>

        {/* Vertical - no grid */}
        <div className="flex flex-col gap-0 max-w-3xl">
          {routing.items.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              className="group block border-l-2 border-cyan/30 hover:border-cyan pl-8 pr-6 py-8 transition-all duration-300 hover:bg-bg/50"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              whileHover={{ x: 4 }}
            >
              <span className="font-mono text-xs text-cyan tracking-[0.15em] uppercase">
                {item.label}
              </span>
              <h3 className="text-lg md:text-xl font-medium text-navy mt-2">
                {item.target}
              </h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
