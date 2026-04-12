"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

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

  // Pattern 3: Development needed
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

  // Pattern 2: SaaS (optimize)
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

  // Pattern 1: Consulting
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section className="py-section bg-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>SIMULATION</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-serif text-2xl md:text-3xl font-semibold text-navy mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          概算見積シミュレーション
        </motion.h2>

        <motion.p
          className="text-text-muted text-sm md:text-base mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          いくつかの質問に答えるだけで、おおよその費用感をご確認いただけます。
        </motion.p>

        {/* Progress bar */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-text-muted font-mono">
              {showResult
                ? "完了"
                : `${currentStep + 1} / ${questions.length}`}
            </span>
            <span className="text-xs text-text-muted font-mono">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-[2px] bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-cyan"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Questions */}
        <AnimatePresence mode="wait">
          {!showResult && (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="font-serif text-lg md:text-xl font-semibold text-navy mb-8">
                {questions[currentStep].label}
              </h3>

              <div className="space-y-3">
                {questions[currentStep].options.map((option) => {
                  const isSelected =
                    answers[questions[currentStep].id] === option.value;
                  return (
                    <button
                      key={option.value}
                      className={`w-full text-left px-6 py-4 border rounded transition-colors duration-200 text-sm md:text-base ${
                        isSelected
                          ? "border-cyan bg-cyan/5 text-navy"
                          : "border-border hover:border-navy/30 text-text"
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

              {/* Back button */}
              {currentStep > 0 && (
                <button
                  className="mt-6 text-sm text-text-muted hover:text-navy transition-colors"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  ← 前の質問に戻る
                </button>
              )}
            </motion.div>
          )}

          {/* Result */}
          {showResult && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Estimate range */}
              <div className="mb-10">
                <p className="text-xs text-text-muted font-mono tracking-wider uppercase mb-4">
                  想定費用レンジ
                </p>
                <p className="font-serif text-2xl md:text-3xl font-semibold text-navy">
                  約 {result.rangeMin} 〜 {result.rangeMax}
                </p>
              </div>

              {/* Recommended plan */}
              <div className="pl-6 border-l-2 border-cyan/30 mb-8 space-y-3">
                <div>
                  <span className="text-xs text-text-muted">推奨プラン</span>
                  <p className="text-navy text-sm md:text-base font-medium mt-1">
                    {result.plan}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-text-muted">コメント</span>
                  <p className="text-text-muted text-sm mt-1">
                    {result.comment}
                  </p>
                </div>
              </div>

              {/* Social proof */}
              <p className="text-text-muted text-xs mb-10 pl-6 border-l-2 border-border">
                約80%の企業がこの段階で課題を抱えています
              </p>

              {/* CTA */}
              <div className="pt-10 border-t border-border">
                <p className="text-text-muted text-sm mb-6 leading-relaxed">
                  詳細な見積をご希望の方は、無料相談にて個別にご案内いたします。
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button variant="primary" size="lg" href="/contact">
                    無料相談する
                  </Button>
                  <button
                    className="text-sm text-text-muted hover:text-navy transition-colors py-3"
                    onClick={handleReset}
                  >
                    もう一度やり直す
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
