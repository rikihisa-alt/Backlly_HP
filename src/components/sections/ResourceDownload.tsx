"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const resources = [
  {
    title: "サービス資料",
    description: "Backllyのサービス内容・支援範囲・導入フローをまとめた資料です。",
    type: "PDF",
    href: "/docs/service-guide.pdf",
  },
  {
    title: "料金資料",
    description: "各サービスの料金体系・プラン比較をご確認いただけます。",
    type: "PDF",
    href: "/docs/pricing-guide.pdf",
  },
  {
    title: "導入事例資料",
    description: "業種別の導入事例と具体的な成果をまとめた資料です。",
    type: "PDF",
    href: "/docs/case-studies.pdf",
  },
];

export default function ResourceDownload() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="download" className="py-section bg-bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>DOWNLOAD</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-2xl md:text-3xl font-semibold text-navy mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          資料ダウンロード
        </motion.h2>

        <motion.p
          className="text-text-muted text-sm md:text-base mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          各サービスの詳細資料をご用意しております。
        </motion.p>

        <div className="space-y-0">
          {resources.map((resource, i) => (
            <motion.div
              key={i}
              className="py-8 border-b border-border first:border-t"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-base md:text-lg font-semibold text-navy">
                      {resource.title}
                    </h3>
                    <span className="text-[10px] font-mono text-text-muted px-2 py-0.5 border border-border rounded">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </div>

                <a
                  href={resource.href}
                  download
                  className="flex-shrink-0 text-sm text-navy font-medium border border-navy px-5 py-2.5 rounded-lg hover:bg-navy hover:text-white transition-all duration-200"
                >
                  ダウンロード
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 text-xs text-text-muted"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          ※ PDFファイルが開きます。
        </motion.p>
      </div>
    </section>
  );
}
