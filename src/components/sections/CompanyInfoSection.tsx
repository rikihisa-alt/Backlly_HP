"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

export default function CompanyInfoSection() {
  const { companyInfo } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const rows = [
    { label: "会社名", value: companyInfo.name },
    { label: "代表取締役", value: companyInfo.representative },
    { label: "所在地", value: companyInfo.location },
    { label: "電話番号", value: companyInfo.phone },
  ];

  return (
    <section id="company" className="py-32 bg-bg" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>COMPANY</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-2xl md:text-3xl font-bold text-navy mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {companyInfo.headline}
        </motion.h2>

        <motion.div
          className="space-y-0"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {rows.map((row, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row border-b border-gray-200 py-5"
            >
              <span className="text-text-muted text-sm w-32 flex-shrink-0 mb-1 sm:mb-0">
                {row.label}
              </span>
              <span className="text-text text-base">
                {row.value}
              </span>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row border-b border-gray-200 py-5">
            <span className="text-text-muted text-sm w-32 flex-shrink-0 mb-1 sm:mb-0">
              事業内容
            </span>
            <div className="space-y-1">
              {companyInfo.services.map((service, i) => (
                <p key={i} className="text-text text-base">
                  {service}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
