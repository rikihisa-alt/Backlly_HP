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
    <section className="py-32 bg-bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionLabel>FOR YOU</SectionLabel>

        <motion.h2
          className="font-serif text-3xl md:text-4xl font-bold text-navy mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {routing.headline}
        </motion.h2>

        {/* 縦並び必須 */}
        <div className="flex flex-col gap-6 max-w-3xl">
          {routing.items.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              className="group block border-l-2 border-navy/30 hover:border-cyan pl-8 pr-6 py-6 transition-colors duration-300 hover:bg-cyan-soft/50"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-sm text-cyan tracking-wider">
                    {item.label}
                  </span>
                  <h3 className="text-lg md:text-xl font-medium text-navy mt-1">
                    {item.target}
                  </h3>
                  <p className="text-sm text-text-muted mt-2">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-navy/60 group-hover:text-cyan transition-colors flex-shrink-0 ml-6">
                  <span className="text-sm font-medium hidden sm:inline">{item.service}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transform group-hover:translate-x-1 transition-transform">
                    <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
