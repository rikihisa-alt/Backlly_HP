"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

interface RowProps {
  label: string;
  children: React.ReactNode;
}

function InfoRow({ label, children }: RowProps) {
  return (
    <div className="border-b border-border py-5 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-6 items-baseline">
      <span className="text-text-muted text-[13px] tracking-wide">{label}</span>
      <div className="text-navy text-[13.5px] md:text-[14px] leading-[1.95]">
        {children}
      </div>
    </div>
  );
}

export default function CompanyInfoSection() {
  const { companyInfo } = siteContent;

  return (
    <section id="company" className="bg-bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4"
        >
          <SectionLabel>COMPANY</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-navy font-bold leading-[1.3] text-[28px] md:text-[36px] lg:text-[42px] mb-5 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        >
          {companyInfo.headline}
        </motion.h2>

        <motion.p
          className="text-text-muted text-[14px] md:text-[15px] leading-[1.95] mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          {companyInfo.businessDescription}
        </motion.p>

        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <InfoRow label="会社名">{companyInfo.name}</InfoRow>
          <InfoRow label="代表取締役">{companyInfo.representative}</InfoRow>
          <InfoRow label="所在地">{companyInfo.location}</InfoRow>
          <InfoRow label="電話番号">{companyInfo.phone}</InfoRow>
          <InfoRow label="事業内容">
            <ul className="space-y-1.5">
              {companyInfo.services.map((s, i) => (
                <li key={i}>・{s}</li>
              ))}
            </ul>
          </InfoRow>
          <InfoRow label="支援体制">{companyInfo.supportStructure}</InfoRow>
          <InfoRow label="対応範囲">{companyInfo.scope}</InfoRow>
          <InfoRow label="返信目安">{companyInfo.responseTime}</InfoRow>
        </motion.div>
      </div>
    </section>
  );
}
