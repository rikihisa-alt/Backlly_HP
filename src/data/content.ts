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
  vision: {
    headline: "バックオフィスを、機能する基盤へ。",
    body: [
      "企業の成長は、表に見える事業だけでなく、その裏側にある業務の流れや管理体制によって支えられています。",
      "Backllyは、バックオフィスを単なる管理業務ではなく、事業を支える「基盤」として機能させることを目指します。",
    ],
  },
  founding: {
    headline: "なぜBackllyを立ち上げたのか",
    body: [
      "多くの企業で、バックオフィスは後回しにされがちです。",
      "現場は忙しく、問題があっても「なんとなく回っている」状態が続きます。しかし、事業が拡大するにつれて、その歪みは確実に表面化します。",
    ],
    issues: [
      "誰が何をしているのか分からない",
      "業務が人に依存している",
      "管理が分断されている",
    ],
    closing: "こうした状況を構造的に解決する必要があると考え、Backllyを立ち上げました。",
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
    {
      title: "設計から実装まで一貫対応",
      description: "業務整理・運用設計・システム開発を分断せず、一連の流れで提供",
    },
    {
      title: "現場運用を前提とした設計",
      description: "理論ではなく、実際に回ることを重視",
    },
    {
      title: "バックオフィス全体を横断",
      description: "部分最適ではなく全体最適で設計",
    },
    {
      title: "個社最適化",
      description: "テンプレではなく企業ごとに最適化",
    },
    {
      title: "システムと運用の両立",
      description: "コンサルと開発を一体で提供",
    },
  ],
  ceoMessage: {
    headline: "現場で回る仕組みをつくるために。",
    body: [
      "バックオフィスの問題は「人」ではなく「仕組み」にあります。",
      "優秀な人材がいても、仕組みが整っていなければ業務は属人化し、やがてどこかで止まります。",
      "Backllyでは、業務の整理から運用設計、システム実装までを一貫して行い、実際に機能するバックオフィスを構築します。",
    ],
  },
  companyInfo: {
    headline: "会社概要",
    name: "株式会社Backlly",
    representative: "力久 凌太郎（Ryotaro RIKIHISA）",
    location: "大阪府大阪市",
    phone: "06-111-111",
    services: [
      "バックオフィスコンサルティング",
      "B-Hallの開発・提供",
      "B-Coreによるシステム開発",
    ],
  },
  trust: {
    targetHeadline: "このような企業に対応しています",
    targets: [
      "バックオフィスが属人化している企業",
      "多拠点で業務が分断されている企業",
      "システム導入がうまくいかなかった企業",
      "業務整理から始めたい企業",
    ],
    scopeHeadline: "対応範囲",
    scopes: [
      "業務整理・可視化",
      "運用設計",
      "システム導入",
      "業務システム開発",
    ],
  },
  cta: {
    headline: "バックオフィスの整理から始めませんか。",
    subline: "現状の課題を整理するところから対応可能です",
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
