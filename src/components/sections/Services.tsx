"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

export default function Services() {
  const { services } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionLabel>SERVICES</SectionLabel>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              className="flex flex-col md:flex-row border-b border-gray-200 last:border-b-0 py-12 first:pt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            >
              {/* Left - Label */}
              <div className="md:w-1/4 mb-4 md:mb-0 flex-shrink-0">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy">
                  {service.name}
                </h3>
                <span className="font-mono text-sm text-cyan tracking-wider">
                  {service.tagline}
                </span>
              </div>

              {/* Right - Description */}
              <div className="md:w-3/4 md:pl-12 flex items-center">
                <p className="text-text-muted text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
