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

/* ----- shared section label ----- */
const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="font-sans font-bold text-[12px] md:text-[13px] tracking-[0.18em] text-navy">
    {children}
  </span>
);

/* ----- reveal-on-scroll wrapper ----- */
const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

/* -------------------------- data -------------------------- */
const serviceTiles = [
  { label: "バックオフィス\nコンサル", Icon: IconConsult },
  { label: "システム開発", Icon: IconSystem },
  { label: "HP・LP制作", Icon: IconHP },
  { label: "業務改善・\nDX支援", Icon: IconChart },
];
// note: serviceTiles.label の \n は意図的な行ブロック分け。
// whitespace-pre-line で改行を反映するため残す。

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
    sub: "業務の可視化・フロー設計・運用ルール策定。属人化した業務を構造化し、誰が見ても流れが分かる状態をつくります。",
  },
  {
    Icon: IconSystem,
    label: "回す",
    title: "バックオフィス一元管理システム「B-Hall」",
    sub: "申請・承認・タスク・進捗を1つの画面で管理。情報が散らばらず、現場と経営の両方からリアルタイムに把握できます。",
  },
  {
    Icon: IconConsult,
    label: "作る",
    title: "企業専用システム開発「B-Core」",
    sub: "要件定義から開発・API連携まで一貫対応。既存ツールと組み合わせながら、企業ごとの業務に最適化された仕組みを構築します。",
  },
  {
    Icon: IconHP,
    label: "届ける",
    title: "ホームページ・ランディングページ制作",
    sub: "企業サイト・LP・採用サイトを設計・制作。事業の世界観を伝え、見込み顧客や採用候補者にしっかり届くデジタル接点を整えます。",
  },
];

const capabilities = [
  { label: "タスク管理", desc: "誰が何を、いつまでに進めているかが一目で分かる" },
  { label: "承認ワークフロー", desc: "申請→承認→記録までを1画面で完結" },
  { label: "契約・請求管理", desc: "契約書・請求書を電子化し、検索性を高める" },
  { label: "経費精算", desc: "領収書アップロード・申請を1分で" },
  { label: "入退社手続き", desc: "アカウント発行・回収のチェックリスト化" },
  { label: "会計・SaaS連携", desc: "freee / マネーフォワード等とのAPI接続" },
];

/* -------------------------- page -------------------------- */
export default function HomeLanding() {
  return (
    <div className="relative bg-bg-white">
      {/* ============ HERO ============ */}
      <section
        id="hero"
        className="relative overflow-hidden bg-bg-white min-h-[calc(100vh-3rem)] flex"
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute top-0 right-0 h-full w-[78%] md:w-[68%] lg:w-[62%]">
            <Image
              src="/images/hero-main.jpg"
              alt="Backlly hero"
              fill
              priority
              sizes="(max-width: 1024px) 78vw, 62vw"
              className="object-cover object-right"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #ffffff 0%, #ffffff 38%, rgba(255,255,255,0.85) 52%, rgba(255,255,255,0.4) 68%, rgba(255,255,255,0) 85%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 78%, rgba(255,255,255,0.85) 92%, #ffffff 100%)",
            }}
          />
          {/* モバイルではテキストを全幅にするため、画像を白でやわらかく覆う */}
          <div className="absolute inset-0 bg-white/55 sm:hidden" />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-24 md:pb-28 flex items-center">
          <div className="max-w-full sm:max-w-[58%] lg:max-w-[52%] w-full">
            <motion.h1
              className="font-serif font-bold text-navy tracking-[-0.02em] text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] mb-7"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ lineHeight: 1.22 }}
            >
              <span className="block">業務をつなぎ、</span>
              <span className="block mt-1">
                会社を<span className="text-brand">動かす</span>。
              </span>
            </motion.h1>

            <motion.p
              className="text-text-muted text-[14px] md:text-[15px] leading-[2] mb-9 max-w-md"
              initial={{ opacity: 0.001, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <span className="block">
                <span className="inline-block">バックオフィスの業務設計</span>から、
                <span className="inline-block">システム構築</span>、
                <span className="inline-block">運用定着まで。</span>
              </span>
              <span className="block">
                経理・労務・総務の属人化を解消し、
                人が変わっても止まらない仕組みをつくります。
              </span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0.001, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-between gap-8 bg-brand hover:bg-brand-dark text-white font-medium text-[15px] rounded px-7 py-3.5 transition-colors shadow-sm min-w-[200px] whitespace-nowrap"
              >
                <span>無料相談</span>
                <Arrow className="w-4 h-4" />
              </Link>
              <Link
                href="/service"
                className="inline-flex items-center justify-between gap-8 bg-white/95 backdrop-blur-sm border border-navy/30 hover:border-navy text-navy font-medium text-[15px] rounded px-7 py-3.5 transition-colors min-w-[200px] whitespace-nowrap"
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
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="grid lg:grid-cols-12 gap-8">
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

            <div className="lg:col-span-7">
              <div className="flex items-baseline gap-4 mb-2">
                <Label>FLOW</Label>
                <h2 className="font-serif text-[19px] md:text-[22px] font-semibold text-navy">
                  業務は、つながって初めて機能する。
                </h2>
              </div>
              <p className="text-text-muted text-[12.5px] leading-relaxed mb-5">
                入社から月次報告まで、<span className="inline-block">バックオフィスの業務</span>は1本の流れです。
                どこか1つが止まると、全体が滞る。<span className="inline-block">Backllyはこの流れを設計します。</span>
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
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-12 md:pb-16">
          <div className="rounded-md border border-border bg-bg-white py-6 px-8">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
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

      {/* ============ VISION ============ */}
      <section id="vision" className="bg-bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="mb-6">
              <Label>VISION</Label>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-brand font-bold leading-[1.35] text-[28px] md:text-[40px] lg:text-[48px] mb-10 max-w-4xl">
              <span className="block">バックオフィスが機能する会社を、</span>
              <span className="block">当たり前にする。</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-12 gap-10">
            <Reveal delay={0.1} className="md:col-span-7">
              <p className="text-navy text-[15px] md:text-[16px] leading-[2.05]">
                業務が止まる根本原因は、人ではなく
                <span className="text-brand font-semibold inline-block">「設計されていないフロー」</span>
                にあります。
                Backllyは、業務を1つずつ分解し、フローを設計し、<span className="inline-block">仕組みとして実装します。</span>
                人が変わっても、拠点が増えても、<span className="inline-block">業務が止まらない状態</span>をつくる
                ── それが私たちが目指す&quot;当たり前&quot;です。
              </p>
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-5">
              <div className="bg-bg rounded-md border border-border p-6 md:p-8">
                <div className="font-sans font-bold text-[11px] tracking-[0.18em] text-brand mb-3">
                  WHY BACKLLY
                </div>
                <ul className="space-y-3 text-[13px] text-navy leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-brand font-bold">01</span>
                    業務設計から運用定着まで一気通貫で対応
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand font-bold">02</span>
                    汎用SaaSと自社開発を組み合わせ最適化
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand font-bold">03</span>
                    導入後の改善・運用支援まで伴走
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="bg-bg border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-4">
              <Label>SERVICES</Label>
              <span className="text-[12.5px] text-text-muted">
                整える <span className="text-brand">→</span> 回す{" "}
                <span className="text-brand">→</span> 作る{" "}
                <span className="text-brand">→</span> 届ける
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-navy font-bold leading-[1.3] text-[28px] md:text-[36px] lg:text-[42px] mb-12 max-w-3xl">
              業務を整え、回し、必要なら作り、外に届ける。
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {serviceList.map((s, i) => (
              <Reveal key={s.title} delay={0.05 + i * 0.05} className="h-full">
                <div className="h-full bg-bg-white rounded-md border border-border p-6 md:p-7 hover:border-brand/40 transition-colors flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <s.Icon className="w-5 h-5 text-brand" />
                    </div>
                    <span className="text-brand font-semibold text-[14px]">
                      {s.label}
                    </span>
                  </div>
                  <h3 className="text-navy font-bold text-[17px] md:text-[18px] leading-snug mb-2.5">
                    {/*
                      タイトルは見出し用のtext-wrap (balance + auto-phrase) が効くため
                      そのまま流す。「B-Hall」「B-Core」前後の不自然な切れは
                      auto-phrase に任せ、ここで余計なinline-blockは付けない。
                    */}
                    {s.title}
                  </h3>
                  <p className="text-text-muted text-[13px] leading-[1.85] flex-1">
                    {s.sub}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CAPABILITIES ============ */}
      <section id="capabilities" className="bg-bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="mb-4">
              <Label>CAPABILITIES</Label>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-navy font-bold leading-[1.3] text-[28px] md:text-[36px] lg:text-[42px] mb-3 max-w-3xl">
              Backllyで対応できること。
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-text-muted text-[14px] md:text-[15px] leading-[1.95] mb-12 max-w-2xl">
              バックオフィス領域に必要な機能・連携を、<span className="inline-block">状況に合わせて</span>組み合わせます。
              既存の業務システムや会計SaaSとも接続可能です。
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.label} delay={0.05 + i * 0.04} className="h-full">
                <div className="h-full flex gap-4 bg-bg rounded-md border border-border p-5 md:p-6">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
                    <IconCheck className="w-4 h-4 text-brand" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-navy font-semibold text-[14.5px] mb-1">
                      {c.label}
                    </div>
                    <div className="text-text-muted text-[12.5px] leading-[1.8]">
                      {c.desc}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 無料相談フォーム ============ */}
      <section id="contact-form" className="bg-brand text-white relative overflow-hidden">
        {/* subtle decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)",
        }} />

        <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="mb-4">
              <span className="font-sans font-bold text-[12px] tracking-[0.18em] text-white/80">
                CONTACT
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif font-bold leading-[1.3] text-[28px] md:text-[40px] lg:text-[48px] mb-4">
              まずは整理から、はじめましょう。
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/85 text-[14px] md:text-[15px] leading-[2] mb-12 max-w-2xl">
              現状の業務課題やお悩みをお聞かせください。
              内容に応じて、<span className="inline-block">最適な進め方をご提案します。</span>
              費用はかかりません。
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              className="bg-white text-navy rounded-md p-6 md:p-10 grid md:grid-cols-2 gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="md:col-span-1">
                <label className="block text-[12px] font-semibold text-navy mb-1.5">
                  お名前 <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="山田 太郎"
                  className="w-full border border-border rounded px-3 py-2.5 text-[14px] focus:outline-none focus:border-brand transition-colors"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-[12px] font-semibold text-navy mb-1.5">
                  会社名
                </label>
                <input
                  type="text"
                  placeholder="株式会社○○"
                  className="w-full border border-border rounded px-3 py-2.5 text-[14px] focus:outline-none focus:border-brand transition-colors"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-[12px] font-semibold text-navy mb-1.5">
                  メールアドレス <span className="text-brand">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="taro@example.com"
                  className="w-full border border-border rounded px-3 py-2.5 text-[14px] focus:outline-none focus:border-brand transition-colors"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-[12px] font-semibold text-navy mb-1.5">
                  電話番号
                </label>
                <input
                  type="tel"
                  placeholder="090-0000-0000"
                  className="w-full border border-border rounded px-3 py-2.5 text-[14px] focus:outline-none focus:border-brand transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[12px] font-semibold text-navy mb-1.5">
                  ご相談内容 <span className="text-brand">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="例)経理業務の属人化を解消したい / 入退社手続きを効率化したい など"
                  className="w-full border border-border rounded px-3 py-2.5 text-[14px] focus:outline-none focus:border-brand transition-colors resize-none"
                />
              </div>
              <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-[11.5px] text-text-muted leading-relaxed">
                  ご入力いただいた情報は、お問い合わせ対応の目的でのみ使用します。
                </p>
                <button
                  type="submit"
                  className="bg-brand hover:bg-brand-dark text-white font-semibold text-[14px] rounded px-8 py-3 inline-flex items-center gap-6 transition-colors min-w-[200px] justify-between"
                >
                  <span>送信する</span>
                  <Arrow className="w-4 h-4" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
