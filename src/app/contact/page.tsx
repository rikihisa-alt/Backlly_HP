"use client";

import Header from "@/components/sections/Header";
import PageHero from "@/components/ui/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Footer from "@/components/sections/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const consultTopics = [
  "業務整理・フロー改善",
  "バックオフィスのシステム化",
  "B-Hall導入のご相談",
  "専用システム開発（B-Core）",
  "運用・保守のご依頼",
  "その他、業務効率化に関するご相談",
];

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <>
      <Header />
      <main>
        <PageHero label="CONTACT" title="お問い合わせ" image="/images/bg-team.jpg" />

        <section className="py-section bg-bg" ref={ref}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-2xl">
              <SectionLabel>CONTACT</SectionLabel>

              <motion.h2
                className="font-serif text-2xl md:text-3xl font-bold text-navy mb-4"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                まずはお気軽にご相談ください。
              </motion.h2>

              <motion.p
                className="text-text-muted text-sm md:text-base mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                お問い合わせから原則1営業日以内にご返信いたします。
                <br />
                オンラインでの無料相談も承っております。
              </motion.p>

              {/* 相談できる内容 */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <p className="text-xs font-mono tracking-wider uppercase text-text-muted mb-4">
                  相談できる内容
                </p>
                <div className="space-y-3">
                  {consultTopics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                      <span className="text-navy text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-start gap-4 mb-16"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Button variant="primary" size="lg">
                  無料相談する
                </Button>
                <Button variant="secondary" size="lg" href="/download">
                  資料をダウンロード
                </Button>
              </motion.div>

              {/* Company contact info */}
              <motion.div
                className="border-t border-border pt-10 space-y-4 text-sm text-text-muted"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <p className="text-xs font-mono tracking-wider uppercase mb-4">
                  COMPANY INFO
                </p>
                <p className="text-navy font-medium">株式会社Backlly</p>
                <p>大阪府大阪市</p>
                <p>TEL: 06-111-111</p>
                <p>返信目安: 1営業日以内</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
