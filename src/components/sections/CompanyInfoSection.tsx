"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

interface RowProps {
  label: string;
  children: React.ReactNode;
}

function InfoRow({ label, children }: RowProps) {
  return (
    <div className="border-b border-border/80 py-5 grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-6 items-baseline">
      <span className="text-text-muted text-sm">{label}</span>
      <div className="text-text text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export default function CompanyInfoSection() {
  const { companyInfo } = siteContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="company" className="py-section relative overflow-hidden" ref={ref}>
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-office.jpg')" }}
      />
      <div className="absolute inset-0 bg-bg/[0.97]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>COMPANY</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-2xl md:text-3xl font-semibold text-navy mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {companyInfo.headline}
        </motion.h2>

        <motion.p
          className="text-text-muted text-sm md:text-base leading-relaxed mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          {companyInfo.businessDescription}
        </motion.p>

        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <InfoRow label="会社名">{companyInfo.name}</InfoRow>
          <InfoRow label="代表取締役">{companyInfo.representative}</InfoRow>
          <InfoRow label="所在地">{companyInfo.location}</InfoRow>
          <InfoRow label="電話番号">{companyInfo.phone}</InfoRow>
          <InfoRow label="事業内容">
            {companyInfo.services.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </InfoRow>
          <InfoRow label="支援体制">{companyInfo.supportStructure}</InfoRow>
          <InfoRow label="対応範囲">{companyInfo.scope}</InfoRow>
          <InfoRow label="返信目安">{companyInfo.responseTime}</InfoRow>
        </motion.div>
      </div>
    </section>
  );
}
