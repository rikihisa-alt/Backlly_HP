"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  {
    id: "visualize",
    label: "業務可視化",
    description:
      "誰が何をしているか、どこで滞っているかが一目でわかる。業務全体を俯瞰できるダッシュボード。",
  },
  {
    id: "progress",
    label: "進行管理",
    description:
      "タスクの進捗・期限・ステータスをリアルタイムで把握。対応漏れを防ぎます。",
  },
  {
    id: "assign",
    label: "担当管理",
    description:
      "誰がどの業務を担当しているかを明確化。属人化を防ぎ、引き継ぎもスムーズに。",
  },
  {
    id: "integrate",
    label: "一元化",
    description:
      "申請・承認・記録・連絡がひとつの画面に。分散していた業務を集約します。",
  },
];

function MiniDashboard({ activeFeature }: { activeFeature: string }) {
  return (
    <div className="rounded-md border border-border bg-bg-white overflow-hidden shadow-sm">
      <div className="bg-bg px-4 py-3 border-b border-border flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
        </div>
        <span className="text-xs text-text-muted font-medium">B-Hall</span>
      </div>

      <div className="p-5">
        <div className="flex gap-6 mb-5">
          {[
            { label: "進行中", count: "12", color: "text-brand" },
            { label: "承認待ち", count: "3", color: "text-amber-500" },
            { label: "完了", count: "47", color: "text-emerald-500" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[10px] text-text-muted">{item.label}</p>
              <p className={`text-lg font-semibold tabular-nums ${item.color}`}>
                {item.count}
              </p>
            </div>
          ))}
        </div>

        <div className="h-[1px] bg-border mb-4" />

        {activeFeature === "visualize" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between py-1">
              <span className="text-xs text-text-muted">総合ステータス</span>
            </div>
            <div className="h-2 bg-bg rounded-full overflow-hidden flex">
              <div className="bg-brand w-[40%] h-full" />
              <div className="bg-amber-400 w-[15%] h-full" />
              <div className="bg-emerald-400 w-[35%] h-full" />
              <div className="bg-border w-[10%] h-full" />
            </div>
            <div className="flex gap-4 mt-2">
              {[
                { label: "進行中", color: "bg-brand" },
                { label: "待ち", color: "bg-amber-400" },
                { label: "完了", color: "bg-emerald-400" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  <span className="text-[10px] text-text-muted">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeFeature === "progress" && (
          <div className="space-y-2.5">
            {[
              { task: "経費精算フロー改善", status: "進行中", deadline: "3/25", pct: 60 },
              { task: "月次レポート作成", status: "承認待ち", deadline: "3/22", pct: 85 },
              { task: "勤怠管理移行", status: "進行中", deadline: "4/01", pct: 30 },
            ].map((item) => (
              <div key={item.task} className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-navy">{item.task}</span>
                  <span className="text-[10px] text-text-muted">{item.deadline}</span>
                </div>
                <div className="h-1 bg-bg rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand rounded-full"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeFeature === "assign" && (
          <div className="space-y-2.5">
            {[
              { name: "田中", role: "経理", tasks: 4, active: true },
              { name: "佐藤", role: "総務", tasks: 3, active: true },
              { name: "鈴木", role: "人事", tasks: 2, active: false },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium ${
                      item.active
                        ? "bg-brand/10 text-brand"
                        : "bg-border text-text-muted"
                    }`}
                  >
                    {item.name[0]}
                  </div>
                  <div>
                    <span className="text-xs text-navy">{item.name}</span>
                    <span className="text-[10px] text-text-muted ml-2">
                      {item.role}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-text-muted">
                  {item.tasks}件担当
                </span>
              </div>
            ))}
          </div>
        )}

        {activeFeature === "integrate" && (
          <div className="space-y-2.5">
            {[
              { label: "経費申請 - 田中", type: "申請", status: "対応中" },
              { label: "備品発注 - 佐藤", type: "承認", status: "承認待ち" },
              { label: "休暇申請 - 鈴木", type: "申請", status: "完了" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-bg text-text-muted">
                    {item.type}
                  </span>
                  <span className="text-xs text-navy">{item.label}</span>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                    item.status === "対応中"
                      ? "bg-brand/10 text-brand"
                      : item.status === "承認待ち"
                      ? "bg-amber-50 text-amber-600"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function BHallDetail() {
  const [activeFeature, setActiveFeature] = useState("visualize");

  return (
    <section id="bhall" className="bg-bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4"
        >
          <SectionLabel>B-HALL</SectionLabel>
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        >
          <Image
            src="/images/logo-bhall.png"
            alt="B-Hall"
            width={160}
            height={48}
            className="h-10 w-auto"
          />
        </motion.div>

        <motion.h2
          className="font-serif text-navy font-bold leading-[1.3] text-[24px] md:text-[32px] lg:text-[36px] mb-5 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          バックオフィスを<span className="text-brand">一元管理</span>する。
        </motion.h2>

        <motion.p
          className="text-text-muted text-[14px] md:text-[15px] leading-[1.95] mb-3 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <span className="inline-block">業務の可視化・進行管理・担当管理・一元化</span>を1画面に集約し、日々の運用を安定させます。
        </motion.p>

        <motion.p
          className="text-text-muted/80 text-[12px] mb-12 max-w-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          ※ 以下はB-Hallの画面イメージです。実際の画面とは異なる場合があります。
        </motion.p>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="space-y-1">
              {features.map((f) => (
                <button
                  key={f.id}
                  className={`w-full text-left px-5 py-4 transition-colors duration-200 border-l-2 ${
                    activeFeature === f.id
                      ? "border-l-brand bg-brand/5"
                      : "border-l-transparent hover:border-l-border hover:bg-bg/60"
                  }`}
                  onClick={() => setActiveFeature(f.id)}
                  onMouseEnter={() => setActiveFeature(f.id)}
                >
                  <p
                    className={`text-[14px] font-semibold mb-1 transition-colors ${
                      activeFeature === f.id ? "text-navy" : "text-text-muted"
                    }`}
                  >
                    {f.label}
                  </p>
                  {activeFeature === f.id && (
                    <motion.p
                      className="text-[12.5px] text-text-muted leading-[1.85]"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.2 }}
                    >
                      {f.description}
                    </motion.p>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-8 pl-5">
              <a
                href="https://b-hall.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-navy text-[13.5px] font-semibold border-b border-navy/30 pb-0.5 hover:border-navy transition-colors whitespace-nowrap"
              >
                <span>B-Hallを詳しく見る</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <MiniDashboard activeFeature={activeFeature} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
