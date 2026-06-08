"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ResourceCard from "@/components/ui/ResourceCard";
import DownloadModal from "@/components/ui/DownloadModal";

export interface ResourceItem {
  title: string;
  description: string;
  buttonLabel: string;
  type: string;
  href: string;
  /** ページ数目安 */
  pages?: string;
}

const resources: ResourceItem[] = [
  {
    title: "サービス資料",
    description:
      "Backllyの支援内容、支援範囲、進め方、対応できる課題、導入対象となる企業像までをまとめた資料です。",
    buttonLabel: "サービス資料をダウンロード",
    type: "PDF",
    href: "/docs/service-guide.pdf",
    pages: "全12ページ",
  },
  {
    title: "料金資料",
    description:
      "支援内容ごとの料金の考え方、費用帯、見積もりの考え方、導入パターン別の費用感をまとめた資料です。",
    buttonLabel: "料金資料をダウンロード",
    type: "PDF",
    href: "/docs/pricing-guide.pdf",
    pages: "全8ページ",
  },
  {
    title: "導入事例資料",
    description:
      "業種別の課題、支援内容、導入後の変化、成果イメージをまとめた資料です。",
    buttonLabel: "導入事例資料をダウンロード",
    type: "PDF",
    href: "/docs/case-studies.pdf",
    pages: "全10ページ",
  },
];

export default function ResourceDownload() {
  const [modalResource, setModalResource] = useState<ResourceItem | null>(null);

  return (
    <>
      <section id="download" className="bg-bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-4"
          >
            <SectionLabel>DOWNLOAD</SectionLabel>
          </motion.div>

          <motion.h2
            className="font-serif text-navy font-bold leading-[1.3] text-[28px] md:text-[36px] lg:text-[42px] mb-3 max-w-3xl"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          >
            まずは資料で、全体像を確認する。
          </motion.h2>

          <motion.p
            className="text-text-muted text-[14px] md:text-[15px] leading-[1.95] mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            サービス内容、支援範囲、費用感、導入の進み方、導入イメージまで、
            <span className="inline-block">検討に必要な情報をPDFにまとめています。</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            {resources.map((resource) => (
              <ResourceCard
                key={resource.title}
                resource={resource}
                onDownload={() => setModalResource(resource)}
              />
            ))}
          </motion.div>

          <motion.div
            className="mt-10 max-w-3xl bg-bg rounded-md border border-border p-6 md:p-7"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-text-muted text-[13.5px] md:text-[14px] leading-[1.95]">
              資料をご確認のうえ、具体的なご相談をご希望の場合は、
              <a
                href="/contact"
                className="text-navy font-semibold border-b border-navy/30 hover:border-navy transition-colors mx-1"
              >
                無料相談
              </a>
              よりご連絡ください。
            </p>
          </motion.div>
        </div>
      </section>

      <DownloadModal
        resource={modalResource}
        onClose={() => setModalResource(null)}
      />
    </>
  );
}
