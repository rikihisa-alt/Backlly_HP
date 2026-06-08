"use client";

import { motion } from "framer-motion";

const trustCompanies = [
  "医療法人A",
  "株式会社B",
  "社会福祉法人C",
  "合同会社D",
  "株式会社E",
  "他50社以上",
];

const trustStats = [
  { value: "50+", label: "支援企業数" },
  { value: "96", unit: "%", label: "継続率" },
  { value: "30", unit: "%", label: "平均工数削減率" },
  { value: "1", unit: "日", label: "平均レスポンス" },
];

/**
 * /works ページ上部の信頼帯。
 * ホームの TRUSTED BY カードと同じ表記・同じ仮名で揃える。
 */
export default function TrustBand() {
  return (
    <section className="bg-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="rounded-md border border-border bg-bg-white py-6 px-8">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <motion.div
                className="flex flex-wrap items-center gap-x-6 gap-y-2"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <span className="font-sans font-bold text-[12px] md:text-[13px] tracking-[0.18em] text-navy">
                  TRUSTED BY
                </span>
                {trustCompanies.map((c) => (
                  <span key={c} className="text-[12px] text-text-muted">
                    {c}
                  </span>
                ))}
              </motion.div>
            </div>
            <motion.div
              className="lg:col-span-5 grid grid-cols-4 gap-3"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              {trustStats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-serif text-navy leading-none font-bold">
                    <span className="text-[28px] md:text-[34px]">{s.value}</span>
                    {s.unit && (
                      <span className="text-[15px] md:text-[17px] text-text-muted ml-0.5 font-medium">
                        {s.unit}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-text-muted mt-1.5 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
