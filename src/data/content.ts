import { SiteContent } from "@/types";

export const siteContent: SiteContent = {
  hero: {
    headline: "バックオフィスを、\n機能させる。",
    subline: "業務を整え、運用し、実装する",
    ctaPrimary: "無料相談",
    ctaSecondary: "サービスを見る",
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
        target: "バックオフィスの整理から始めたい",
        description: "業務が属人化している / 何から整えるべきか分からない",
        label: "整える",
        service: "コンサル",
        href: "#services",
      },
      {
        target: "業務を効率化したい",
        description: "申請・管理・進行がバラバラになっている",
        label: "回す",
        service: "B-Hall",
        href: "#services",
      },
      {
        target: "自社専用の仕組みを構築したい",
        description: "自社業務に最適化されたシステムが必要",
        label: "作る",
        service: "B-Core",
        href: "#services",
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
      { step: "STEP 1", title: "ヒアリング", description: "現状の課題と業務を把握する" },
      { step: "STEP 2", title: "業務整理", description: "業務フローを可視化し棚卸しする" },
      { step: "STEP 3", title: "設計", description: "最適な構造と運用を設計する" },
      { step: "STEP 4", title: "システム構築", description: "設計に基づきシステムを実装する" },
      { step: "STEP 5", title: "運用支援", description: "定着するまで伴走する" },
    ],
  },
  services: [
    {
      id: "consulting",
      name: "コンサル",
      label: "整える",
      tagline: "バックオフィスコンサルティング",
      description:
        "業務の棚卸しからフロー設計、役割整理までを行い、バックオフィス全体の構造を整理します。",
    },
    {
      id: "bhall",
      name: "B-Hall",
      label: "回す",
      tagline: "バックオフィス基盤",
      description:
        "バックオフィス業務を一元管理・可視化し、日々の運用を安定して回すための基盤を提供します。",
      logo: "/images/logo-bhall.png",
    },
    {
      id: "bcore",
      name: "B-Core",
      label: "作る",
      tagline: "企業専用システム開発",
      description:
        "企業ごとの業務に最適化されたシステムを、要件定義から設計・開発・運用まで一貫して構築します。",
      logo: "/images/logo-bcore.png",
    },
  ],
  vision: {
    headline: "バックオフィスを、機能する基盤へ。",
    body: [
      "バックオフィスは、単なる\u201C裏方\u201Dではありません。企業の意思決定と成長を支える、重要な基盤です。",
      "しかし現場では、属人化や非効率、業務の分断によって、本来の機能が発揮されていないケースが多く存在します。",
      "Backllyは、業務を整理し、流れを設計し、仕組みとして実装することで、バックオフィスを\u201C機能する状態\u201Dへと再構築します。",
    ],
  },
  mission: {
    headline: "仕組みで、現場を変える。",
    body: [
      "個人の努力に依存する運用ではなく、仕組みによって再現性のある業務を実現する。",
      "業務を可視化し、流れを整え、誰でも回せる状態をつくること。",
      "それが、Backllyのミッションです。",
    ],
  },
  values: [
    {
      title: "構造で考える",
      description: "表面的な改善ではなく、業務の構造そのものを見直します。",
    },
    {
      title: "現場に落とす",
      description: "設計だけで終わらず、実際に運用できる形まで落とし込みます。",
    },
    {
      title: "一貫して担う",
      description: "要件定義から開発・運用までを分断せず対応します。",
    },
    {
      title: "個社最適",
      description: "テンプレではなく、企業ごとに最適な仕組みを構築します。",
    },
  ],
  caseStudies: [
    {
      client: "訪問看護事業者",
      description: "業務フロー整理＋システム導入",
      result: "月間工数30%削減、情報共有の一元化",
    },
    {
      client: "スタートアップ企業",
      description: "バックオフィス全体の再設計",
      result: "業務の可視化と役割整理により意思決定速度向上",
    },
    {
      client: "介護事業者",
      description: "複数拠点の管理体制構築",
      result: "業務の標準化とミス削減",
    },
  ],
  strengths: [
    {
      title: "一貫対応",
      description: "課題整理から開発・運用までを一気通貫で対応",
    },
    {
      title: "現場起点",
      description: "実務に基づいた設計で、運用に耐える仕組みを構築",
    },
    {
      title: "全体最適",
      description: "部分最適ではなく、全体構造を最適化",
    },
    {
      title: "開発力",
      description: "コンサルで終わらず、実装まで担う",
    },
  ],
  ceoMessage: {
    headline: "現場で回る仕組みをつくるために。",
    body: [
      "バックオフィスは、気づいたときには複雑化しています。担当者ごとのやり方や例外対応が積み重なり、全体像が見えなくなる。",
      "私たちは、それを\u201C仕組み\u201Dとして整理し直します。",
      "属人性を排除し、誰でも回る状態をつくる。それが企業の安定と成長につながると考えています。",
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
      "バックオフィス支援システム「B-Hall」の提供",
      "業務効率化・DX支援",
      "企業専用システム開発（B-Core）",
    ],
  },
  faq: [
    {
      question: "どの段階から相談できますか？",
      answer: "初期の整理段階から対応可能です。",
    },
    {
      question: "小規模な会社でも依頼できますか？",
      answer: "可能です。規模に応じて最適な設計を行います。",
    },
    {
      question: "システム開発だけ依頼できますか？",
      answer: "可能ですが、業務整理からの実施を推奨しています。",
    },
    {
      question: "期間はどれくらいですか？",
      answer: "整理は数週間〜、開発は数ヶ月が目安です。",
    },
    {
      question: "費用はどのくらいですか？",
      answer: "内容に応じて個別見積となります。初回相談は無料です。",
    },
  ],
  cta: {
    headline: "まずは整理から。",
    subline: "現状の課題を可視化し、改善の方向性を明確にします。",
    examples: [
      "業務の課題整理",
      "システム化の可否判断",
      "業務効率化の方向性整理",
    ],
    ctaPrimary: "無料相談する",
  },
  footer: {
    name: "株式会社Backlly",
    catchphrase: "バックオフィスを、機能させる。",
    copyright: "© 2025 Backlly Inc.",
  },
  differentiator: "コンサルだけで終わらせません。\n設計し、実装し、運用まで担います。",
};
