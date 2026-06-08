"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Arrow = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={p.className}>
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * サブページ共通CTA。
 * ホームの contact-form セクションとは役割を分け、
 * シンプルに「無料相談 / 資料ダウンロード」の2導線だけを置く。
 */
export default function CTA() {
  return (
    <section id="contact" className="bg-brand text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4"
        >
          <span className="font-sans font-bold text-[12px] md:text-[13px] tracking-[0.18em] text-white/80">
            CONTACT
          </span>
        </motion.div>

        <motion.h2
          className="font-serif font-bold leading-[1.3] text-[28px] md:text-[36px] lg:text-[42px] mb-5 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        >
          現状の業務を、いっしょに整理しませんか。
        </motion.h2>

        <motion.p
          className="text-white/85 text-[14px] md:text-[15px] leading-[2] mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          初回相談は無料です。まずは課題を伺い、最適な進め方をご提案します。
          資料だけ先に確認したい方は、サービス・料金・事例をまとめた資料を
          PDFでお渡ししています。
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-between gap-8 bg-white text-brand font-semibold text-[15px] rounded px-7 py-3.5 transition-colors hover:bg-white/95 min-w-[220px]"
          >
            <span>無料相談</span>
            <Arrow className="w-4 h-4" />
          </Link>
          <Link
            href="/download"
            className="inline-flex items-center justify-between gap-8 border border-white/40 hover:border-white text-white font-medium text-[15px] rounded px-7 py-3.5 transition-colors min-w-[220px]"
          >
            <span>資料ダウンロード</span>
            <Arrow className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
