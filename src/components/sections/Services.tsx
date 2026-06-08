"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteContent } from "@/data/content";

/**
 * /service のメインサービス一覧。
 * 「整える」→「回す」→「作る」→「届ける」の4サービスを縦カードで列挙。
 */
export default function Services() {
  const { services } = siteContent;

  return (
    <section id="services" className="bg-bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-baseline gap-4 mb-4 flex-wrap"
        >
          <SectionLabel>SERVICES</SectionLabel>
          <span className="text-[12.5px] text-text-muted">
            整える <span className="text-brand">→</span> 回す{" "}
            <span className="text-brand">→</span> 作る{" "}
            <span className="text-brand">→</span> 届ける
          </span>
        </motion.div>

        <motion.h2
          className="font-serif text-navy font-bold leading-[1.3] text-[28px] md:text-[36px] lg:text-[42px] mb-3 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        >
          業務を整え、回し、必要なら作り、外に<span className="text-brand">届ける</span>。
        </motion.h2>

        <motion.p
          className="text-text-muted text-[14px] md:text-[15px] leading-[1.95] mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          コンサルティングだけで終わらせません。設計し、実装し、運用まで担います。
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              id={service.id}
              className="bg-bg rounded-md border border-border p-6 md:p-7 hover:border-brand/40 transition-colors flex flex-col h-full"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.05 + i * 0.05, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-sans font-bold text-[13px] text-brand tracking-wide">
                  {service.label}
                </span>
                <span className="text-[11.5px] text-text-muted">
                  {service.tagline}
                </span>
              </div>

              {service.logo ? (
                <Image
                  src={service.logo}
                  alt={service.name}
                  width={200}
                  height={60}
                  className="mb-3 block"
                  style={{
                    height: "32px",
                    width: "auto",
                    maxWidth: "180px",
                    objectFit: "contain",
                    objectPosition: "left",
                  }}
                />
              ) : (
                <h3 className="text-navy font-bold text-[18px] md:text-[19px] leading-snug mb-3">
                  {service.name}
                </h3>
              )}

              <p className="text-text-muted text-[13px] leading-[1.95] flex-1">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-12 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <h3 className="font-serif text-navy font-bold text-[18px] md:text-[20px] mb-3">
            一貫支援も、スポット対応も。
          </h3>
          <p className="text-text-muted text-[13.5px] md:text-[14px] leading-[1.95] mb-5">
            業務が整理されていない段階であれば、<span className="inline-block">コンサルティングから入り</span>、フロー設計・ルール整備・業務整理を行います。
            そのうえで必要に応じて、<span className="inline-block">B-Hallの導入</span>や、<span className="inline-block">企業専用システムの開発</span>まで対応します。
            すでに一部が整っている場合は、以下のようなスポット支援も可能です。
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {[
              "業務整理のみ",
              "システム開発のみ",
              "HP・LP制作のみ",
              "運用改善のみ",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                <span className="text-[13.5px] text-navy">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
