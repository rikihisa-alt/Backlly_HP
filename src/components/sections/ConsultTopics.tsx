"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { siteContent } from "@/data/content";

export default function ConsultTopics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { consultTopics } = siteContent;

  return (
    <section className="py-section bg-bg" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>CONSULT</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-2xl md:text-3xl font-semibold text-navy mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          相談できる内容
        </motion.h2>

        <motion.p
          className="text-text-muted text-sm md:text-base mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          以下のようなご相談に対応しています。まずはお気軽にご連絡ください。
        </motion.p>

        <div className="space-y-0">
          {consultTopics.map((topic, i) => (
            <motion.div
              key={i}
              className="py-8 border-b border-border first:border-t"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <span className="text-cyan text-sm font-mono mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button variant="primary" size="lg" href="#contact">
            無料相談する
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
