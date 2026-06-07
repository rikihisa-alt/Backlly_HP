"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

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
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
    <path d="M5 12l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Arrow = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={p.className}>
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
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
  { value: "96%", label: "継続率", unit: "%", val: "96" },
  { value: "30%", label: "平均工数削減率", unit: "%", val: "30" },
  { value: "1日", label: "平均レスポンス", unit: "日", val: "1" },
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
    <div className="relative">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-20 pb-2">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left copy */}
            <div className="lg:col-span-7">
              <motion.h1
                className="font-serif font-bold text-navy leading-[1.1] tracking-[-0.01em] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] mb-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                業務をつなぎ、
                <br />
                会社を<span className="text-cyan">動かす</span>。
              </motion.h1>

              <motion.p
                className="text-text-muted text-[13px] md:text-[14px] leading-[1.85] mb-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                バックオフィスの業務設計から、システム構築、運用定着まで。
                <br />
                経理・労務・総務の属人化を解消し、
                <br />
                人が変わっても止まらない仕組みをつくります。
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Button variant="primary" size="md" href="/contact">
                  無料相談 →
                </Button>
                <Button variant="secondary" size="md" href="/service">
                  サービスを見る →
                </Button>
              </motion.div>
            </div>

            {/* Right image placeholder */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              {/*
                HERO IMAGE PLACEHOLDER
                画像が届いたら /public/images/hero-main.jpg に配置し、
                以下の <Image /> をコメントアウト解除して背景の枠を消してください。
              */}
              <div className="relative w-full aspect-[3/2] lg:aspect-[3/2] rounded-md overflow-hidden border border-navy/40 bg-bg">
                {/*
                <Image src="/images/hero-main.jpg" alt="Backlly hero" fill priority className="object-cover" />
                */}
                {/* corner ticks */}
                <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-navy/50" />
                <span className="absolute top-2 right-2 w-3 h-3 border-t border-r border-navy/50" />
                <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-navy/50" />
                <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-navy/50" />
                {/* diagonal */}
                <svg className="absolute inset-0 w-full h-full text-navy/15" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                  <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4 bg-bg/90 backdrop-blur-sm py-2 px-4 rounded">
                    <div className="font-mono text-[11px] tracking-[0.25em] text-navy mb-0.5">
                      HERO IMAGE
                    </div>
                    <div className="text-[11px] text-text-muted">
                      画像が届き次第ここに配置
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ Service tiles + FLOW ============ */}
      <section className="bg-bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-4">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Tiles 4 (left 5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-4 gap-3">
              {serviceTiles.map((t) => (
                <div
                  key={t.label}
                  className="flex flex-col items-center justify-center text-center bg-bg rounded-md border border-border py-4 px-2 hover:border-navy/30 transition-colors"
                >
                  <t.Icon className="w-6 h-6 text-navy mb-1.5" />
                  <span className="text-[11px] leading-snug text-navy whitespace-pre-line">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>

            {/* FLOW (right 7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-[11px] tracking-[0.25em] text-cyan">FLOW</span>
                <h2 className="font-serif text-xl md:text-[22px] font-semibold text-navy">
                  業務は、つながって初めて機能する。
                </h2>
              </div>
              <p className="text-text-muted text-[12px] md:text-[13px] leading-relaxed mb-4">
                入社から月次報告まで、バックオフィスの業務は1本の流れです。
                <br />
                どこか1つが止まると、全体が滞る。Backllyはこの流れを設計します。
              </p>

              <div className="grid grid-cols-5 gap-2">
                {flowSteps.map((step, i) => (
                  <div key={step.no} className="relative">
                    <div className="rounded-md border border-border bg-bg-white p-3">
                      <div className="font-mono text-[11px] text-cyan mb-1">
                        {step.no}　{step.label}
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
      <section className="bg-bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-4">
          <div className="rounded-md border border-border bg-bg-white py-5 px-6">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              {/* Companies */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <span className="font-mono text-[11px] tracking-[0.25em] text-navy/70">
                    TRUSTED BY
                  </span>
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
                    <div className="font-serif text-navy text-[22px] md:text-[26px] leading-none font-semibold">
                      {s.value}
                    </div>
                    <div className="text-[10px] text-text-muted mt-1 leading-tight">
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
      <section className="bg-bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-6">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* VISION */}
            <div className="lg:col-span-3">
              <div className="font-mono text-[11px] tracking-[0.25em] text-cyan mb-2">
                VISION
              </div>
              <h3 className="font-serif text-navy font-semibold leading-snug text-[16px] md:text-[17px] mb-3">
                バックオフィスが機能する会社を、
                <br />
                当たり前にする。
              </h3>
              <p className="text-text-muted text-[12px] leading-[1.75] mb-3">
                業務フローが設計されていないことが根本原因です。
                Backllyは、業務を1つずつ分解し、フローを設計し、
                仕組みとして実装する。人が変わっても、拠点が増えても、
                業務が止まらない状態をつくる。
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-[12px] text-navy hover:text-cyan transition-colors"
              >
                もっと見る <Arrow className="w-3 h-3" />
              </Link>
            </div>

            {/* SERVICES */}
            <div className="lg:col-span-5">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-[11px] tracking-[0.25em] text-cyan">
                  SERVICES
                </span>
                <span className="text-[12px] text-navy">
                  整える <span className="text-cyan">→</span> 回す{" "}
                  <span className="text-cyan">→</span> 作る{" "}
                  <span className="text-cyan">→</span> 届ける
                </span>
              </div>
              <ul className="space-y-1.5">
                {serviceList.map((s) => (
                  <li
                    key={s.title}
                    className="flex items-start gap-2.5 border-b border-border last:border-b-0 pb-1.5 last:pb-0"
                  >
                    <div className="w-6 h-6 rounded bg-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <s.Icon className="w-3 h-3 text-navy" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] leading-tight">
                        <span className="text-navy font-medium">{s.label}</span>
                        <span className="text-text-muted/60 mx-2">　</span>
                        <span className="text-navy">{s.title}</span>
                      </div>
                      <div className="text-[10.5px] text-text-muted leading-snug mt-0.5">
                        {s.sub}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CAPABILITIES */}
            <div className="lg:col-span-2">
              <div className="font-mono text-[11px] tracking-[0.25em] text-cyan mb-2">
                CAPABILITIES
              </div>
              <div className="text-[12px] text-navy mb-3">
                Backllyで対応できること
              </div>
              <ul className="space-y-1.5">
                {capabilities.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <IconCheck className="w-3 h-3 text-cyan flex-shrink-0" />
                    <span className="text-[12px] text-navy">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT card */}
            <div className="lg:col-span-2">
              <div className="bg-navy rounded-md p-4 text-white h-full flex flex-col">
                <div className="font-mono text-[11px] tracking-[0.25em] text-white/60 mb-1.5">
                  CONTACT
                </div>
                <h4 className="font-serif font-semibold text-[17px] leading-tight mb-1.5">
                  まずは整理から。
                </h4>
                <p className="text-[11px] text-white/70 leading-snug mb-3">
                  現状の課題を可視化し、
                  改善の方向性を明確にします。
                </p>
                <div className="flex flex-col gap-1.5 mt-auto">
                  <Link
                    href="/contact"
                    className="bg-white text-navy text-[12px] font-medium rounded py-1.5 px-3 flex items-center justify-between hover:bg-white/90 transition-colors"
                  >
                    <span>無料相談する</span>
                    <Arrow className="w-3 h-3" />
                  </Link>
                  <Link
                    href="/download"
                    className="border border-white/30 text-white text-[12px] font-medium rounded py-1.5 px-3 flex items-center justify-between hover:bg-white/10 transition-colors"
                  >
                    <span>資料をダウンロード</span>
                    <Arrow className="w-3 h-3" />
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
