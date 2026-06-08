"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

interface Question {
  id: string;
  label: string;
  options: { value: string; text: string }[];
}

const questions: Question[] = [
  {
    id: "status",
    label: "Q1. 現在の状況",
    options: [
      { value: "unorganized", text: "業務が整理されていない" },
      { value: "partial", text: "一部整理されている" },
      { value: "organized", text: "ある程度整っている" },
    ],
  },
  {
    id: "purpose",
    label: "Q2. 目的",
    options: [
      { value: "organize", text: "業務を整理したい" },
      { value: "optimize", text: "効率化したい" },
      { value: "develop", text: "システムを作りたい" },
    ],
  },
  {
    id: "scale",
    label: "Q3. 規模",
    options: [
      { value: "small", text: "小規模（〜5人）" },
      { value: "medium", text: "中規模（〜20人）" },
      { value: "large", text: "大規模（20人以上）" },
    ],
  },
  {
    id: "development",
    label: "Q4. 開発の有無",
    options: [
      { value: "no", text: "不要" },
      { value: "yes", text: "必要" },
      { value: "unknown", text: "わからない" },
    ],
  },
];

interface Result {
  rangeMin: string;
  rangeMax: string;
  plan: string;
  comment: string;
}

function calcResult(answers: Record<string, string>): Result {
  const { purpose, scale, development } = answers;

  if (development === "yes") {
    if (scale === "large") {
      return {
        rangeMin: "300万",
        rangeMax: "1000万円以上",
        plan: "業務整理＋B-Hall導入＋B-Core開発",
        comment: "大規模開発の場合、段階的な導入をご提案します。",
      };
    }
    if (scale === "medium") {
      return {
        rangeMin: "150万",
        rangeMax: "500万円",
        plan: "業務整理＋B-Core開発",
        comment: "業務整理と並行して、最適なシステムを設計します。",
      };
    }
    return {
      rangeMin: "80万",
      rangeMax: "200万円",
      plan: "業務整理＋小規模開発",
      comment: "スモールスタートで始め、段階的に拡張できます。",
    };
  }

  if (purpose === "optimize") {
    if (scale === "large") {
      return {
        rangeMin: "初期20万＋月額10万",
        rangeMax: "15万円〜",
        plan: "業務整理＋B-Hall導入（Enterprise）",
        comment: "まずは全体像の可視化から始めることを推奨します。",
      };
    }
    return {
      rangeMin: "初期10万＋月額3万",
      rangeMax: "10万円〜",
      plan: "業務整理＋B-Hall導入",
      comment: "業務を整理した上で、B-Hallで運用を安定させます。",
    };
  }

  if (scale === "large") {
    return {
      rangeMin: "50万",
      rangeMax: "100万円",
      plan: "フル設計コンサルティング",
      comment: "組織全体の業務構造を整理・再設計します。",
    };
  }
  if (scale === "medium") {
    return {
      rangeMin: "20万",
      rangeMax: "50万円",
      plan: "業務整理コンサルティング",
      comment: "現状は整理フェーズが重要です。",
    };
  }
  return {
    rangeMin: "10万",
    rangeMax: "30万円",
    plan: "スタンダードコンサルティング",
    comment: "まずは業務の棚卸しから始めましょう。",
  };
}

export default function Simulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 200);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const result = showResult ? calcResult(answers) : null;
  const progress = showResult
    ? 100
    : ((currentStep + (answers[questions[currentStep]?.id] ? 1 : 0)) /
        questions.length) *
      100;

  return (
    <section id="simulator" className="bg-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4"
        >
          <SectionLabel>SIMULATION</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-navy font-bold leading-[1.3] text-[28px] md:text-[36px] lg:text-[42px] mb-3 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        >
          概算費用、いますぐ<span className="text-brand">シミュレーション</span>。
        </motion.h2>

        <motion.p
          className="text-text-muted text-[14px] md:text-[15px] leading-[1.95] mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          いくつかの質問に答えるだけで、おおよその費用感をご確認いただけます。
        </motion.p>

        <div className="max-w-3xl bg-bg-white rounded-md border border-border p-7 md:p-10">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] text-text-muted font-medium tabular-nums">
                {showResult ? "完了" : `${currentStep + 1} / ${questions.length}`}
              </span>
              <span className="text-[12px] text-text-muted font-medium tabular-nums">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-[3px] bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-brand"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!showResult && (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="font-serif text-navy font-bold text-[18px] md:text-[20px] mb-6">
                  {questions[currentStep].label}
                </h3>

                <div className="space-y-2.5">
                  {questions[currentStep].options.map((option) => {
                    const isSelected =
                      answers[questions[currentStep].id] === option.value;
                    return (
                      <button
                        key={option.value}
                        className={`w-full text-left px-5 py-3.5 border rounded transition-colors duration-200 text-[14px] md:text-[14.5px] ${
                          isSelected
                            ? "border-brand bg-brand/5 text-navy"
                            : "border-border hover:border-navy/30 text-navy"
                        }`}
                        onClick={() =>
                          handleSelect(
                            questions[currentStep].id,
                            option.value
                          )
                        }
                      >
                        {option.text}
                      </button>
                    );
                  })}
                </div>

                {currentStep > 0 && (
                  <button
                    className="mt-5 text-[13px] text-text-muted hover:text-navy transition-colors"
                    onClick={() => setCurrentStep(currentStep - 1)}
                  >
                    ← 前の質問に戻る
                  </button>
                )}
              </motion.div>
            )}

            {showResult && result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <p className="font-sans font-bold text-[12px] tracking-[0.18em] text-brand mb-3">
                    想定費用レンジ
                  </p>
                  <p className="font-serif text-navy font-bold text-[26px] md:text-[32px] leading-[1.3]">
                    約 {result.rangeMin} 〜 {result.rangeMax}
                  </p>
                </div>

                <div className="bg-bg rounded-md border border-border p-5 md:p-6 mb-6">
                  <div className="mb-4">
                    <span className="text-[12px] text-text-muted">推奨プラン</span>
                    <p className="text-navy text-[14.5px] font-semibold mt-1">
                      {result.plan}
                    </p>
                  </div>
                  <div>
                    <span className="text-[12px] text-text-muted">コメント</span>
                    <p className="text-text-muted text-[13.5px] leading-[1.95] mt-1">
                      {result.comment}
                    </p>
                  </div>
                </div>

                <p className="text-text-muted text-[12.5px] mb-8">
                  ※ 上記はあくまで概算です。正式な見積は無料相談にて個別にご案内します。
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-between gap-8 bg-brand hover:bg-brand-dark text-white font-medium text-[15px] rounded px-7 py-3.5 transition-colors min-w-[200px]"
                  >
                    <span>無料相談</span>
                    <span aria-hidden>→</span>
                  </Link>
                  <button
                    className="text-[13px] text-text-muted hover:text-navy transition-colors py-3"
                    onClick={handleReset}
                  >
                    もう一度やり直す
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
