"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-desk.jpg')" }}
      />
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/[0.95]" />

      {/* Thin grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center py-section">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            >
              <SectionLabel>BACKLLY</SectionLabel>
            </motion.div>

            <motion.h1
              className="font-serif text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] font-bold text-navy leading-[1.2] tracking-[-0.01em] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              業務をつなぎ、
              <br />
              会社を<span className="text-cyan">動かす</span>。
            </motion.h1>

            <motion.p
              className="text-text-muted text-base md:text-lg leading-relaxed mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }}
            >
              バックオフィスの業務設計から、システム構築、運用定着まで。
            </motion.p>

            <motion.p
              className="text-text-muted/80 text-sm md:text-base leading-relaxed mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
            >
              経理・労務・総務の属人化を解消し、
              <br className="hidden sm:inline" />
              人が変わっても止まらない仕組みをつくります。
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5, ease: "easeOut" }}
            >
              <Button variant="primary" size="lg" href="/contact">
                無料相談
              </Button>
              <Button variant="secondary" size="lg" href="/service">
                サービスを見る
              </Button>
            </motion.div>
          </div>

          {/* Right: hero image placeholder */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
          >
            {/*
              HERO IMAGE PLACEHOLDER
              画像が届いたら以下のコメントを解除して <img> または <Image fill> に差し替えてください。
              推奨パス: /public/images/hero-main.jpg
            */}
            <div className="relative w-full aspect-[4/5] lg:aspect-[5/6] rounded-lg overflow-hidden border border-border bg-gradient-to-br from-navy/5 via-white to-cyan/10">
              {/* 差し替え用:
              <Image src="/images/hero-main.jpg" alt="Backlly hero" fill priority className="object-cover" />
              */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="font-mono text-[11px] tracking-[0.2em] text-text-muted mb-2">
                    HERO IMAGE
                  </div>
                  <div className="text-xs text-text-muted/70">
                    画像が届き次第差し替え
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
