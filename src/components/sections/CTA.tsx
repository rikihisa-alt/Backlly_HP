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
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {cta.headline}
        </motion.h2>

        <motion.p
          className="text-white/60 text-base md:text-lg mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {cta.subline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button variant="primary" size="lg">
            {cta.ctaPrimary}
          </Button>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 text-lg font-medium font-sans rounded border border-white/40 text-white hover:bg-white/10 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {cta.ctaSecondary}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
