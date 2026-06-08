"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

/**
 * /company ページ用、ビジョンを1段落に要約する短尺ブロック。
 * 詳細は /about への導線で見せる。Vision.tsx とは見せ方を変える。
 */
export default function VisionBrief() {
  const { vision } = siteContent;

  return (
    <section id="vision-brief" className="bg-bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6"
        >
          <SectionLabel>VISION</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-brand font-bold leading-[1.35] text-[28px] md:text-[36px] lg:text-[42px] mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        >
          {vision.headline}
        </motion.h2>

        <motion.p
          className="text-text-muted text-[14px] md:text-[15px] leading-[2.05] max-w-3xl mb-8"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          人が変わっても、拠点が増えても、業務が止まらない状態をつくる。
          それがBacklly全社で共有する&quot;当たり前&quot;です。理念・ミッション・行動指針の詳細はAboutページで詳しくご紹介しています。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-3 text-navy text-[14px] font-semibold border-b border-navy/30 hover:border-navy pb-1 transition-colors"
          >
            <span>Backllyの考え方を詳しく見る</span>
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
