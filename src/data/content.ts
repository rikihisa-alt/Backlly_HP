import { SiteContent } from "@/types";

export const siteContent: SiteContent = {
  hero: {
    headline: "バックオフィスを、\n機能させる。",
    subline: "業務を整え、運用し、実装する",
    ctaPrimary: "無料相談",
    ctaSecondary: "お問い合わせ",
  },
  problem: {
    headline: "回っていないのは、仕組みです。",
    items: [
      "人に依存している",
      "流れが見えない",
      "管理が分断されている",
    ],
  },
  routing: {
    headline: "状況に応じて、解決します。",
    items: [
      {
        target: "バックオフィス整理が必要な方",
        description: "業務が属人化している / 何から整えるべきか分からない",
        label: "整える",
        service: "コンサル",
        href: "#consulting",
      },
      {
        target: "業務効率を改善したい方",
        description: "申請・管理・進行がバラバラ",
        label: "回す",
        service: "B-Hall",
        href: "#bhall",
      },
      {
        target: "システム開発を検討している方",
        description: "自社専用の仕組みが必要",
        label: "作る",
        service: "B-Core",
        href: "#bcore",
      },
    ],
  },
  solution: {
    headline: "整えれば、回る。",
    items: ["業務が流れる", "状況が見える", "判断が残る"],
  },
  approach: {
    headline: "Backllyの進め方",
    steps: [
      { step: "STEP 1", title: "設計", description: "業務整理・構造化" },
      { step: "STEP 2", title: "基盤", description: "B-Hallで運用" },
      { step: "STEP 3", title: "開発", description: "B-Coreで最適化" },
    ],
  },
  services: [
    {
      id: "consulting",
      name: "コンサル",
      tagline: "業務設計・運用構築",
      description: "現状整理から体制構築まで伴走する",
    },
    {
      id: "bhall",
      name: "B-Hall",
      tagline: "バックオフィス基盤",
      description: "申請・管理・可視化を一元化するシステム",
    },
    {
      id: "bcore",
      name: "B-Core",
      tagline: "個社専用開発",
      description: "自社業務に最適化したシステムを実装する",
    },
  ],
  strengths: [
    { text: "現場運用まで設計する" },
    { text: "システム導入で終わらない" },
    { text: "業務全体を扱う" },
  ],
  cta: {
    headline: "まずは整理から。",
    ctaPrimary: "無料相談",
    ctaSecondary: "お問い合わせ",
  },
  footer: {
    name: "株式会社Backlly",
    catchphrase: "バックオフィスを、機能させる。",
    copyright: "© 2025 Backlly Inc.",
  },
  company: {
    name: "株式会社Backlly",
  },
};
