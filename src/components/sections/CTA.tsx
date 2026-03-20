"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { siteContent } from "@/data/content";

export default function CTA() {
  const { cta } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-navy" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <SectionLabel color="cyan">CONTACT</SectionLabel>

        <motion.h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {cta.headline}
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button variant="primary" size="lg">
            {cta.ctaPrimary}
          </Button>
          <Button variant="secondary" size="lg">
            <span className="text-white border-white">{cta.ctaSecondary}</span>
          </Button>
        </motion.div>

        <motion.p
          className="text-white/60 text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          まずはお気軽にご相談ください
        </motion.p>
      </div>
    </section>
  );
}
