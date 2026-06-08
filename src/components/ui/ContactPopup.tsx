"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "backlly:contact-popup-dismissed";

export default function ContactPopup() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(true); // start true to avoid flicker SSR

  // initial mount: only show after a short delay if not previously dismissed in this session
  useEffect(() => {
    const wasDismissed = sessionStorage.getItem(STORAGE_KEY) === "1";
    setDismissed(wasDismissed);
    if (!wasDismissed) {
      const t = setTimeout(() => setOpen(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    setOpen(false);
    setDismissed(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const reopen = () => {
    setDismissed(false);
    setOpen(true);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      {/* Floating card */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="popup"
            className="fixed bottom-20 right-5 md:bottom-24 md:right-8 z-[60] w-[280px] md:w-[300px]"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="relative bg-brand text-white rounded-lg shadow-2xl p-5">
              {/* Close */}
              <button
                onClick={close}
                aria-label="閉じる"
                className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                  <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
                </svg>
              </button>

              <div className="font-sans font-bold text-[11px] tracking-[0.18em] text-white/80 mb-1.5">
                CONTACT
              </div>
              <h4 className="font-serif font-bold text-[18px] leading-tight mb-1.5">
                まずは整理から。
              </h4>
              <p className="text-[11.5px] text-white/85 leading-relaxed mb-4">
                現状の課題を可視化し、改善の方向性を明確にします。
              </p>

              <div className="flex flex-col gap-2">
                <Link
                  href="#contact-form"
                  onClick={() => setOpen(false)}
                  className="bg-white text-brand text-[12.5px] font-semibold rounded py-2 px-3 flex items-center justify-between hover:bg-white/95 transition-colors"
                >
                  <span>無料相談する</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/download"
                  className="border border-white/40 text-white text-[12.5px] font-semibold rounded py-2 px-3 flex items-center justify-between hover:bg-white/10 transition-colors"
                >
                  <span>資料をダウンロード</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* small tail */}
            <div className="absolute -bottom-1 right-8 w-3 h-3 bg-brand rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Re-open mini bubble when dismissed */}
      <AnimatePresence>
        {dismissed && !open && (
          <motion.button
            key="bubble"
            onClick={reopen}
            aria-label="お問い合わせを開く"
            className="fixed bottom-20 right-5 md:bottom-24 md:right-8 z-[60] w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand text-white shadow-2xl flex items-center justify-center hover:bg-brand-dark transition-colors"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
