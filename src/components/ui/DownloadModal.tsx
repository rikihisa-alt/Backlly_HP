"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ResourceItem } from "@/components/sections/ResourceDownload";

interface DownloadModalProps {
  resource: ResourceItem | null;
  onClose: () => void;
}

export default function DownloadModal({
  resource,
  onClose,
}: DownloadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleClose = useCallback(() => {
    onClose();
    setTimeout(() => {
      setFormData({ name: "", company: "", email: "", message: "" });
      setSubmitted(false);
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (resource) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [resource, handleClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDownload = () => {
    if (resource) {
      const a = document.createElement("a");
      a.href = resource.href;
      a.download = "";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    handleClose();
  };

  const inputClass =
    "w-full px-4 py-2.5 border border-border rounded text-sm text-navy placeholder:text-text-muted/40 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/20 transition-colors";

  return (
    <AnimatePresence>
      {resource && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            className="relative bg-white rounded shadow-2xl w-full max-w-lg overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-8 pt-8 pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-cyan mb-2">
                    DOWNLOAD
                  </p>
                  <h3 className="font-serif text-xl font-bold text-navy">
                    {resource.title}
                  </h3>
                </div>
                <button
                  onClick={handleClose}
                  className="text-text-muted hover:text-navy transition-colors p-1 -mr-1 -mt-1"
                  aria-label="閉じる"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 5l10 10M15 5L5 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="px-8 pb-8">
                <p className="text-text-muted text-sm mb-6 leading-relaxed">
                  以下をご入力のうえ、ダウンロードしてください。
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-navy mb-1.5">
                      お名前 <span className="text-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      autoComplete="name"
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
                      autoComplete="organization"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className={inputClass}
                      placeholder="株式会社〇〇"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-navy mb-1.5">
                      メールアドレス <span className="text-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      autoComplete="email"
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
                      ご相談内容
                      <span className="text-text-muted font-normal ml-1">
                        （任意）
                      </span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`${inputClass} resize-none`}
                      placeholder="気になっていること、ご状況など"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-navy text-white font-medium py-3 rounded hover:bg-navy-mid transition-colors text-sm"
                >
                  入力して資料をダウンロード
                </button>

                <p className="mt-3 text-[11px] text-text-muted/60 text-center">
                  ご入力いただいた情報は資料送付およびご連絡のみに使用いたします。
                </p>
              </form>
            ) : (
              <div className="px-8 pb-8 text-center">
                <div className="py-6">
                  <div className="w-14 h-14 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M7 14l5 5 9-9"
                        stroke="currentColor"
                        className="text-cyan"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-serif text-lg font-bold text-navy mb-2">
                    ありがとうございます。
                  </p>
                  <p className="text-text-muted text-sm mb-6">
                    資料のダウンロードが可能です。
                  </p>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 bg-navy text-white font-medium px-8 py-3 rounded hover:bg-navy-mid transition-colors text-sm"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8 2v8m0 0L5 7m3 3l3-3M3 12h10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {resource.title}をダウンロード
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
