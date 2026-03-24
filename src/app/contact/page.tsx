"use client";

import Header from "@/components/sections/Header";
import PageHero from "@/components/ui/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/sections/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const consultTopics = [
  "業務整理・フロー改善",
  "バックオフィスのシステム化",
  "B-Hall導入のご相談",
  "専用システム開発（B-Core）",
  "運用・保守のご依頼",
  "費用感の確認",
  "その他",
];

const companySizes = [
  "1〜10名",
  "11〜30名",
  "31〜50名",
  "51〜100名",
  "101名以上",
];

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    size: "",
    topics: [] as string[],
    message: "",
  });

  const handleTopicToggle = (topic: string) => {
    setFormData((prev) => ({
      ...prev,
      topics: prev.topics.includes(topic)
        ? prev.topics.filter((t) => t !== topic)
        : [...prev.topics, topic],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: フォームデータをAPIに送信
    // console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 border border-border rounded-lg text-sm text-navy placeholder:text-text-muted/40 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/20 transition-colors bg-white";

  return (
    <>
      <Header />
      <main>
        <PageHero
          label="CONTACT"
          title="無料相談・お問い合わせ"
          image="/images/bg-team.jpg"
        />

        <section className="py-section bg-bg" ref={ref}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-24">
              {/* Left: Form */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <SectionLabel>FREE CONSULTATION</SectionLabel>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-3">
                    無料相談フォーム
                  </h2>
                  <p className="text-text-muted text-sm md:text-base mb-10 leading-relaxed">
                    以下のフォームにご記入ください。原則1営業日以内にご返信いたします。
                    <br />
                    初回のご相談は無料です。オンライン（Zoom / Google
                    Meet）での実施となります。
                  </p>
                </motion.div>

                {!submitted ? (
                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="space-y-6"
                  >
                    {/* Name + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-navy mb-1.5">
                          お名前 <span className="text-cyan">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className={inputClass}
                          placeholder="山田 太郎"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-navy mb-1.5">
                          会社名 <span className="text-cyan">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          className={inputClass}
                          placeholder="株式会社〇〇"
                        />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-navy mb-1.5">
                          メールアドレス <span className="text-cyan">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className={inputClass}
                          placeholder="example@company.co.jp"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-navy mb-1.5">
                          電話番号
                          <span className="text-text-muted font-normal ml-1">
                            （任意）
                          </span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className={inputClass}
                          placeholder="06-0000-0000"
                        />
                      </div>
                    </div>

                    {/* Company size */}
                    <div>
                      <label className="block text-xs font-medium text-navy mb-1.5">
                        従業員数
                        <span className="text-text-muted font-normal ml-1">
                          （任意）
                        </span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {companySizes.map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                size: formData.size === size ? "" : size,
                              })
                            }
                            className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                              formData.size === size
                                ? "border-cyan bg-cyan/5 text-navy"
                                : "border-border text-text-muted hover:border-navy/30"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Topics */}
                    <div>
                      <label className="block text-xs font-medium text-navy mb-2">
                        ご相談内容
                        <span className="text-text-muted font-normal ml-1">
                          （複数選択可）
                        </span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {consultTopics.map((topic) => (
                          <label
                            key={topic}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
                              formData.topics.includes(topic)
                                ? "border-cyan bg-cyan/5"
                                : "border-border hover:border-navy/30"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
                                formData.topics.includes(topic)
                                  ? "border-cyan bg-cyan"
                                  : "border-border"
                              }`}
                            >
                              {formData.topics.includes(topic) && (
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 10"
                                  fill="none"
                                >
                                  <path
                                    d="M2 5l2 2 4-4"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </div>
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={formData.topics.includes(topic)}
                              onChange={() => handleTopicToggle(topic)}
                            />
                            <span className="text-sm text-navy">{topic}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-medium text-navy mb-1.5">
                        ご相談内容の詳細
                        <span className="text-text-muted font-normal ml-1">
                          （任意）
                        </span>
                      </label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className={`${inputClass} resize-none`}
                        placeholder="現在の課題やご状況、ご要望などをお聞かせください。&#10;&#10;例：&#10;・経理業務が特定の1人に依存している&#10;・業務フローが整理されておらず、引き継ぎができない&#10;・SaaSの導入を検討しているが、何が合うかわからない"
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto bg-navy text-white font-medium px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-sm"
                      >
                        無料相談を申し込む
                      </button>
                      <p className="mt-3 text-[11px] text-text-muted/60">
                        ご入力いただいた情報はご相談対応およびご連絡のみに使用いたします。
                      </p>
                    </div>
                  </motion.form>
                ) : (
                  /* Success */
                  <motion.div
                    className="py-16 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-6">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M8 16l6 6 10-10"
                          stroke="#06B6D4"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-navy mb-3">
                      お申し込みありがとうございます。
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-2">
                      原則1営業日以内にご連絡いたします。
                    </p>
                    <p className="text-text-muted text-sm leading-relaxed">
                      お急ぎの場合は、お電話（06-111-111）でもご相談を承っております。
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Right: Sidebar info */}
              <motion.aside
                className="lg:pt-24"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {/* What to expect */}
                <div className="mb-10">
                  <p className="text-xs font-mono tracking-wider uppercase text-text-muted mb-4">
                    相談の流れ
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        step: "01",
                        title: "フォーム送信",
                        desc: "本フォームよりお申し込みください。",
                      },
                      {
                        step: "02",
                        title: "日程調整",
                        desc: "1営業日以内に日程調整のご連絡をします。",
                      },
                      {
                        step: "03",
                        title: "オンライン相談（30〜60分）",
                        desc: "現状の課題をヒアリングし、改善の方向性をお伝えします。",
                      },
                      {
                        step: "04",
                        title: "ご提案",
                        desc: "相談内容をもとに、支援内容と概算をご提案します。",
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3">
                        <span className="font-mono text-xs text-cyan mt-0.5 flex-shrink-0">
                          {item.step}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-navy">
                            {item.title}
                          </p>
                          <p className="text-xs text-text-muted mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-8 mb-8">
                  <p className="text-xs font-mono tracking-wider uppercase text-text-muted mb-4">
                    相談できる内容
                  </p>
                  <div className="space-y-2">
                    {[
                      "業務の課題整理",
                      "システム化の可否判断",
                      "費用感の確認",
                      "導入事例の紹介",
                      "B-Hall / B-Coreの説明",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-cyan" />
                        <span className="text-sm text-navy">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Company info */}
                <div className="border-t border-border pt-8 space-y-3 text-sm text-text-muted">
                  <p className="text-xs font-mono tracking-wider uppercase mb-3">
                    COMPANY INFO
                  </p>
                  <p className="text-navy font-medium">株式会社Backlly</p>
                  <p>大阪府大阪市</p>
                  <p>TEL: 06-111-111</p>
                  <p>返信目安: 1営業日以内</p>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
