"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* -------------------------- icons -------------------------- */
const IconConsult = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={p.className}>
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.2" />
    <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
    <path d="M14 19c0-2 1.7-3.5 4-3.5S22 17 22 19" />
  </svg>
);
const IconSystem = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={p.className}>
    <rect x="3" y="4" width="18" height="13" rx="1.5" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);
const IconHP = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={p.className}>
    <rect x="3" y="4" width="18" height="16" rx="1.5" />
    <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
  </svg>
);
const IconChart = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={p.className}>
    <path d="M4 20V10M9 20V6M14 20v-9M19 20V4" />
    <path d="M3 20h18" />
  </svg>
);
const IconCheck = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={p.className}>
    <path d="M5 12l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Arrow = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={p.className}>
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ----- section label (BOLD BLACK uppercase tracking) ----- */
const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="font-sans font-bold text-[12px] md:text-[13px] tracking-[0.18em] text-navy">
    {children}
  </span>
);

/* -------------------------- data -------------------------- */
const serviceTiles = [
  { label: "バックオフィス\nコンサル", Icon: IconConsult },
  { label: "システム開発", Icon: IconSystem },
  { label: "HP・LP制作", Icon: IconHP },
  { label: "業務改善・\nDX支援", Icon: IconChart },
];

const flowSteps = [
  { no: "01", label: "入社", desc: "手続き・アカウント発行" },
  { no: "02", label: "労務", desc: "勤怠・社保・給与" },
  { no: "03", label: "経理", desc: "請求・支払い・仕訳" },
  { no: "04", label: "承認", desc: "申請・決裁・記録" },
  { no: "05", label: "報告", desc: "月次集計・経営数字" },
];

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

const serviceList = [
  {
    Icon: IconConsult,
    label: "整える",
    title: "バックオフィスコンサルティング",
    sub: "業務の可視化・フロー設計・運用ルール策定",
  },
  {
    Icon: IconSystem,
    label: "回す",
    title: "バックオフィス一元管理システム「B-Hall」",
    sub: "申請・承認・タスク・進捗を1つの画面で管理",
  },
  {
    Icon: IconConsult,
    label: "作る",
    title: "企業専用システム開発「B-Core」",
    sub: "要件定義から開発・API連携まで一貫対応",
  },
  {
    Icon: IconHP,
    label: "届ける",
    title: "ホームページ・ランディングページ制作",
    sub: "企業サイト・LP・採用サイトを設計・制作",
  },
];

const capabilities = [
  "タスク管理",
  "承認ワークフロー",
  "契約・請求管理",
  "経費精算",
  "入退社手続き",
  "会計・SaaS連携",
];

/* -------------------------- page -------------------------- */
export default function HomeLanding() {
  return (
    <div className="relative bg-bg-white">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-bg-white">
        {/* Background image (right side, fades into white on the left) */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Image anchored to the right edge so the man's silhouette stays centered-right */}
          <div className="absolute top-0 right-0 h-full w-[78%] md:w-[68%] lg:w-[62%]">
            <Image
              src="/images/hero-main.png"
              alt="Backlly hero"
              fill
              priority
              sizes="(max-width: 1024px) 78vw, 62vw"
              className="object-cover object-right"
            />
          </div>
          {/* Left fade — covers left half completely, then transitions to transparent */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #ffffff 0%, #ffffff 38%, rgba(255,255,255,0.85) 52%, rgba(255,255,255,0.4) 68%, rgba(255,255,255,0) 85%)",
            }}
          />
          {/* Soft top/bottom fade to blend with neighbouring sections */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.85) 92%, #ffffff 100%)",
            }}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-20 md:pb-24">
          <div className="max-w-[58%] lg:max-w-[52%]">
            <motion.h1
              className="font-serif font-bold text-navy leading-[1.08] tracking-[-0.02em] text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] mb-7"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              業務をつなぎ、
              <br />
              会社を<span className="text-brand">動かす</span>。
            </motion.h1>

            <motion.p
              className="text-text-muted text-[14px] md:text-[15px] leading-[2] mb-9"
              initial={{ opacity: 0.001, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              バックオフィスの業務設計から、システム構築、運用定着まで。
              <br />
              経理・労務・総務の属人化を解消し、
              <br />
              人が変わっても止まらない仕組みをつくります。
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0.001, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-between gap-8 bg-brand hover:bg-brand-dark text-white font-medium text-[15px] rounded px-7 py-3.5 transition-colors shadow-sm min-w-[200px]"
              >
                <span>無料相談</span>
                <Arrow className="w-4 h-4" />
              </Link>
              <Link
                href="/service"
                className="inline-flex items-center justify-between gap-8 bg-white/95 backdrop-blur-sm border border-navy/30 hover:border-navy text-navy font-medium text-[15px] rounded px-7 py-3.5 transition-colors min-w-[200px]"
              >
                <span>サービスを見る</span>
                <Arrow className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ Service tiles + FLOW ============ */}
      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-12">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Tiles 4 */}
            <div className="lg:col-span-5 grid grid-cols-4 gap-3">
              {serviceTiles.map((t) => (
                <div
                  key={t.label}
                  className="flex flex-col items-center justify-center text-center bg-bg-white rounded-md border border-border py-7 px-2 hover:border-brand/40 transition-colors"
                >
                  <t.Icon className="w-8 h-8 text-navy mb-2.5" />
                  <span className="text-[11.5px] font-medium leading-snug text-navy whitespace-pre-line">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>

            {/* FLOW */}
            <div className="lg:col-span-7">
              <div className="flex items-baseline gap-4 mb-2">
                <Label>FLOW</Label>
                <h2 className="font-serif text-[19px] md:text-[22px] font-semibold text-navy">
                  業務は、つながって初めて機能する。
                </h2>
              </div>
              <p className="text-text-muted text-[12.5px] leading-relaxed mb-5">
                入社から月次報告まで、バックオフィスの業務は1本の流れです。
                <br />
                どこか1つが止まると、全体が滞る。Backllyはこの流れを設計します。
              </p>

              <div className="grid grid-cols-5 gap-2">
                {flowSteps.map((step, i) => (
                  <div key={step.no} className="relative">
                    <div className="rounded-md border border-border bg-bg-white p-3.5">
                      <div className="flex items-baseline gap-2 mb-1.5">
                        <span className="font-sans font-bold text-[14px] text-brand">
                          {step.no}
                        </span>
                        <span className="text-[12.5px] font-medium text-navy">
                          {step.label}
                        </span>
                      </div>
                      <div className="text-[11px] text-text-muted leading-snug">
                        {step.desc}
                      </div>
                    </div>
                    {i < flowSteps.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10 text-border">
                        <Arrow className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUSTED BY ============ */}
      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10 md:pb-12">
          <div className="rounded-md border border-border bg-bg-white py-6 px-8">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              {/* Companies */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <Label>TRUSTED BY</Label>
                  {trustCompanies.map((c) => (
                    <span key={c} className="text-[12px] text-text-muted">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              {/* Stats */}
              <div className="lg:col-span-5 grid grid-cols-4 gap-3">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VISION + SERVICES + CAPABILITIES/CONTACT ============ */}
      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* VISION */}
            <div className="lg:col-span-3">
              <div className="mb-3">
                <Label>VISION</Label>
              </div>
              <h3 className="font-serif text-brand font-bold leading-snug text-[16px] md:text-[17px] mb-4">
                バックオフィスが機能する会社を、
                <br />
                当たり前にする。
              </h3>
              <p className="text-text-muted text-[12.5px] leading-[1.95] mb-5">
                業務フローが設計されていないことが根本原因です。
                Backllyは、業務を1つずつ分解し、フローを設計し、
                仕組みとして実装する。人が変わっても、拠点が増えても、
                業務が止まらない状態をつくる。
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-[12.5px] text-text-muted hover:text-brand transition-colors"
              >
                もっと見る <Arrow className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* SERVICES */}
            <div className="lg:col-span-5">
              <div className="flex items-baseline gap-4 mb-5">
                <Label>SERVICES</Label>
                <span className="text-[12.5px] text-text-muted">
                  整える <span className="text-brand">→</span> 回す{" "}
                  <span className="text-brand">→</span> 作る{" "}
                  <span className="text-brand">→</span> 届ける
                </span>
              </div>
              <ul className="space-y-4">
                {serviceList.map((s) => (
                  <li
                    key={s.title}
                    className="flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded bg-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <s.Icon className="w-4 h-4 text-brand" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] leading-tight flex items-baseline gap-2.5">
                        <span className="text-brand font-semibold">{s.label}</span>
                        <span className="text-navy">{s.title}</span>
                      </div>
                      <div className="text-[11.5px] text-text-muted leading-snug mt-1">
                        {s.sub}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CAPABILITIES */}
            <div className="lg:col-span-2">
              <div className="mb-3">
                <Label>CAPABILITIES</Label>
              </div>
              <div className="text-[12.5px] text-navy font-medium mb-4">
                Backllyで対応できること
              </div>
              <ul className="space-y-2.5">
                {capabilities.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <IconCheck className="w-3.5 h-3.5 text-navy flex-shrink-0" />
                    <span className="text-[12.5px] text-navy">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT card */}
            <div className="lg:col-span-2">
              <div className="bg-brand rounded-md p-5 text-white h-full flex flex-col">
                <div className="mb-2.5">
                  <span className="font-sans font-bold text-[12px] tracking-[0.18em] text-white">
                    CONTACT
                  </span>
                </div>
                <h4 className="font-serif font-bold text-[19px] leading-tight mb-2.5">
                  まずは整理から。
                </h4>
                <p className="text-[11.5px] text-white/85 leading-relaxed mb-6">
                  現状の課題を可視化し、
                  改善の方向性を明確にします。
                </p>
                <div className="flex flex-col gap-2 mt-auto">
                  <Link
                    href="/contact"
                    className="bg-white text-brand text-[12.5px] font-semibold rounded py-2.5 px-3 flex items-center justify-between hover:bg-white/95 transition-colors"
                  >
                    <span>無料相談する</span>
                    <Arrow className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/download"
                    className="bg-white text-brand text-[12.5px] font-semibold rounded py-2.5 px-3 flex items-center justify-between hover:bg-white/95 transition-colors"
                  >
                    <span>資料をダウンロード</span>
                    <Arrow className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
