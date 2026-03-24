"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [modalResource, setModalResource] = useState<ResourceItem | null>(null);

  return (
    <>
      <section id="download" className="py-section bg-bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>DOWNLOAD</SectionLabel>
          </motion.div>

          <motion.h2
            className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-4 leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            まずは資料で、
            <br className="hidden md:block" />
            Backllyの全体像をご確認ください。
          </motion.h2>

          <motion.p
            className="text-text-muted text-sm md:text-base mb-16 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            サービス内容、支援範囲、費用感、導入の進み方、実際の導入イメージまで、
            検討に必要な情報をまとめています。
          </motion.p>

          {/* Resource list — vertical, not card grid */}
          <div className="space-y-0">
            {resources.map((resource, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                <ResourceCard
                  resource={resource}
                  onDownload={() => setModalResource(resource)}
                />
              </motion.div>
            ))}
          </div>

          {/* Supplementary note */}
          <motion.div
            className="mt-12 pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <p className="text-text-muted text-sm leading-relaxed">
              資料をご確認のうえ、より具体的なご相談をご希望の場合は、
              <a
                href="/contact"
                className="text-navy font-medium underline underline-offset-4 hover:text-cyan transition-colors"
              >
                お問い合わせ
              </a>
              よりご連絡ください。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download modal */}
      <DownloadModal
        resource={modalResource}
        onClose={() => setModalResource(null)}
      />
    </>
  );
}
