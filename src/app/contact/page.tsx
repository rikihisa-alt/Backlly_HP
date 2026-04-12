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

const preferredTimes = [
  "午前（9:00〜12:00）",
  "午後（12:00〜15:00）",
  "夕方（15:00〜18:00）",
  "いつでも可",
];

const contactMethods = [
  { label: "メール", value: "email" },
  { label: "電話", value: "phone" },
  { label: "どちらでも", value: "both" },
];

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    nameKana: "",
    company: "",
    position: "",
    email: "",
    phone: "",
    preferredContact: "both",
    preferredTime: "",
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
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const inputClass =
    "w-full px-4 py-3 border border-border rounded text-sm text-navy placeholder:text-text-muted/40 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/10 transition-all bg-white";

  const labelClass = "block text-xs font-medium text-navy mb-1.5";
  const requiredMark = <span className="text-cyan ml-0.5">*</span>;
  const optionalMark = (
    <span className="text-text-muted font-normal ml-1">（任意）</span>
  );

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
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-20">
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
                  <p className="text-text-muted text-sm md:text-base mb-2 leading-relaxed">
                    以下のフォームにご記入ください。初回相談は無料、原則1営業日以内にご返信いたします。
                  </p>
                  <p className="text-text-muted text-xs mb-10">
                    ※ 電話番号をご記入の場合、ご希望の時間帯に折り返しお電話いたします。メールのみでも対応可能です。
                  </p>
                </motion.div>

                {!submitted ? (
                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="space-y-10"
                  >
                    {/* Section 1: Basic info */}
                    <fieldset>
                      <legend className="text-xs font-mono tracking-wider uppercase text-text-muted mb-5 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-navy text-white flex items-center justify-center text-[10px]">
                          1
                        </span>
                        お客様情報
                      </legend>

                      <div className="space-y-4">
                        <div className="space-y-4">
                          <div>
                            <label className={labelClass}>
                              お名前{requiredMark}
                            </label>
                            <input
                              type="text"
                              required
                              autoComplete="name"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              className={inputClass}
                              placeholder="山田 太郎"
                            />
                          </div>
                          <div>
                            <label className={labelClass}>
                              ふりがな{optionalMark}
                            </label>
                            <input
                              type="text"
                              autoComplete="off"
                              value={formData.nameKana}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  nameKana: e.target.value,
                                })
                              }
                              className={inputClass}
                              placeholder="やまだ たろう"
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label className={labelClass}>
                              会社名{requiredMark}
                            </label>
                            <input
                              type="text"
                              required
                              autoComplete="organization"
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
                          <div>
                            <label className={labelClass}>
                              役職{optionalMark}
                            </label>
                            <input
                              type="text"
                              autoComplete="organization-title"
                              value={formData.position}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  position: e.target.value,
                                })
                              }
                              className={inputClass}
                              placeholder="代表取締役 / 管理部長 など"
                            />
                          </div>
                        </div>

                        {/* Company size */}
                        <div>
                          <label className={labelClass}>
                            従業員数{optionalMark}
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
                                className={`px-4 py-2 text-sm rounded border transition-all ${
                                  formData.size === size
                                    ? "border-cyan bg-cyan/5 text-navy ring-1 ring-cyan/20"
                                    : "border-border text-text-muted hover:border-navy/30"
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    {/* Section 2: Contact */}
                    <fieldset>
                      <legend className="text-xs font-mono tracking-wider uppercase text-text-muted mb-5 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-navy text-white flex items-center justify-center text-[10px]">
                          2
                        </span>
                        ご連絡先
                      </legend>

                      <div className="space-y-4">
                        <div>
                          <label className={labelClass}>
                            メールアドレス{requiredMark}
                          </label>
                          <input
                            type="email"
                            required
                            autoComplete="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className={inputClass}
                            placeholder="example@company.co.jp"
                          />
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label className={labelClass}>
                              電話番号{optionalMark}
                            </label>
                            <input
                              type="tel"
                              autoComplete="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                })
                              }
                              className={inputClass}
                              placeholder="06-0000-0000"
                            />
                            <p className="text-[11px] text-text-muted/60 mt-1">
                              ※ 折り返しご連絡いたします
                            </p>
                          </div>
                          <div>
                            <label className={labelClass}>
                              電話に出やすい時間帯{optionalMark}
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {preferredTimes.map((time) => (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={() =>
                                    setFormData({
                                      ...formData,
                                      preferredTime:
                                        formData.preferredTime === time
                                          ? ""
                                          : time,
                                    })
                                  }
                                  className={`px-3 py-1.5 text-xs rounded-md border transition-all ${
                                    formData.preferredTime === time
                                      ? "border-cyan bg-cyan/5 text-navy ring-1 ring-cyan/20"
                                      : "border-border text-text-muted hover:border-navy/30"
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Preferred contact method */}
                        <div>
                          <label className={labelClass}>
                            ご希望の連絡方法{optionalMark}
                          </label>
                          <div className="flex gap-3">
                            {contactMethods.map((method) => (
                              <label
                                key={method.value}
                                className={`flex items-center gap-2 px-4 py-2 rounded border cursor-pointer transition-all ${
                                  formData.preferredContact === method.value
                                    ? "border-cyan bg-cyan/5 ring-1 ring-cyan/20"
                                    : "border-border hover:border-navy/30"
                                }`}
                              >
                                <div
                                  className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center transition-colors ${
                                    formData.preferredContact === method.value
                                      ? "border-cyan"
                                      : "border-border"
                                  }`}
                                >
                                  {formData.preferredContact ===
                                    method.value && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                                  )}
                                </div>
                                <input
                                  type="radio"
                                  name="preferredContact"
                                  value={method.value}
                                  className="sr-only"
                                  checked={
                                    formData.preferredContact === method.value
                                  }
                                  onChange={() =>
                                    setFormData({
                                      ...formData,
                                      preferredContact: method.value,
                                    })
                                  }
                                />
                                <span className="text-sm text-navy">
                                  {method.label}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    {/* Section 3: Consultation */}
                    <fieldset>
                      <legend className="text-xs font-mono tracking-wider uppercase text-text-muted mb-5 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-navy text-white flex items-center justify-center text-[10px]">
                          3
                        </span>
                        ご相談内容
                      </legend>

                      <div className="space-y-5">
                        {/* Topics */}
                        <div>
                          <label className={labelClass}>
                            ご相談のカテゴリ
                            <span className="text-text-muted font-normal ml-1">
                              （複数選択可）
                            </span>
                          </label>
                          <div className="space-y-2">
                            {consultTopics.map((topic) => (
                              <label
                                key={topic}
                                className={`flex items-center gap-3 px-4 py-3 rounded border cursor-pointer transition-all ${
                                  formData.topics.includes(topic)
                                    ? "border-cyan bg-cyan/5 ring-1 ring-cyan/20"
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
                                <span className="text-sm text-navy">
                                  {topic}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label className={labelClass}>
                            ご相談内容の詳細{optionalMark}
                          </label>
                          <textarea
                            rows={5}
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                message: e.target.value,
                              })
                            }
                            className={`${inputClass} resize-none`}
                            placeholder={`現在の課題やご状況、ご要望などをお聞かせください。\n\n例：\n・経理業務が特定の1人に依存している\n・業務フローが整理されておらず、引き継ぎができない\n・SaaSの導入を検討しているが、何が合うかわからない`}
                          />
                        </div>
                      </div>
                    </fieldset>

                    {/* Submit */}
                    <div className="pt-4 border-t border-border">
                      <button
                        type="submit"
                        className="w-full sm:w-auto bg-navy text-white font-medium px-10 py-3.5 rounded hover:bg-navy-mid transition-colors text-sm flex items-center justify-center gap-2"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M14 2L7 14l-2-5-5-2L14 2z"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        無料相談を申し込む
                      </button>
                      <p className="mt-3 text-[11px] text-text-muted/60">
                        ご入力いただいた情報はご相談対応およびご連絡のみに使用いたします。郵送物の送付はございません。
                      </p>
                    </div>
                  </motion.form>
                ) : (
                  /* Success */
                  <motion.div
                    className="py-16"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-white border border-border rounded px-8 py-12 text-center">
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
                      <p className="text-text-muted text-sm leading-relaxed mb-6">
                        原則1営業日以内に、ご希望の連絡方法でご連絡いたします。
                      </p>

                      <div className="inline-flex flex-col items-start gap-2 bg-bg rounded px-6 py-4 text-left">
                        <p className="text-xs font-mono tracking-wider uppercase text-text-muted mb-1">
                          今後の流れ
                        </p>
                        <div className="flex items-center gap-2 text-sm text-navy">
                          <span className="text-cyan font-mono text-xs">
                            01
                          </span>
                          日程調整のご連絡（1営業日以内）
                        </div>
                        <div className="flex items-center gap-2 text-sm text-navy">
                          <span className="text-cyan font-mono text-xs">
                            02
                          </span>
                          オンライン相談（30〜60分）
                        </div>
                        <div className="flex items-center gap-2 text-sm text-navy">
                          <span className="text-cyan font-mono text-xs">
                            03
                          </span>
                          支援内容と概算のご提案
                        </div>
                      </div>

                      <p className="text-text-muted text-xs mt-6">
                        お急ぎの場合は、お電話（06-111-111）でもご相談を承っております。
                      </p>
                    </div>
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
                        title: "折り返しご連絡",
                        desc: "1営業日以内にメールまたはお電話でご連絡します。",
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

                {/* Safety note */}
                <div className="border-t border-border pt-8 mb-8">
                  <p className="text-xs font-mono tracking-wider uppercase text-text-muted mb-4">
                    安心してご相談ください
                  </p>
                  <div className="space-y-3 text-xs text-text-muted leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="text-cyan mt-0.5">&#10003;</span>
                      <span>
                        初回相談は無料です。費用は一切かかりません。
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan mt-0.5">&#10003;</span>
                      <span>
                        しつこい営業・郵送物はございません。
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan mt-0.5">&#10003;</span>
                      <span>
                        相談後に契約の義務はありません。
                      </span>
                    </div>
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
