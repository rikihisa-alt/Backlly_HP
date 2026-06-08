"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  image: string;
  /** どちら側に画像を寄せ、テキストを反対側に置くか */
  imagePosition?: "right" | "left";
}

export default function PageHero({
  label,
  title,
  subtitle,
  image,
  imagePosition = "right",
}: PageHeroProps) {
  const isRight = imagePosition === "right";
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-bg-white"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div
          className={`absolute top-0 h-full w-[78%] md:w-[68%] lg:w-[62%] ${
            isRight ? "right-0" : "left-0"
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 78vw, 62vw"
            className={`object-cover ${isRight ? "object-right" : "object-left"}`}
          />
        </div>
        {/* Fade gradient on the text side */}
        <div
          className="absolute inset-0"
          style={{
            background: isRight
              ? "linear-gradient(to right, #ffffff 0%, #ffffff 38%, rgba(255,255,255,0.85) 52%, rgba(255,255,255,0.4) 68%, rgba(255,255,255,0) 85%)"
              : "linear-gradient(to left, #ffffff 0%, #ffffff 38%, rgba(255,255,255,0.85) 52%, rgba(255,255,255,0.4) 68%, rgba(255,255,255,0) 85%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 78%, rgba(255,255,255,0.85) 92%, #ffffff 100%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-24">
        <div
          className={`max-w-[58%] lg:max-w-[52%] ${
            isRight ? "" : "ml-auto text-right"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-sans font-bold text-[12px] md:text-[13px] tracking-[0.18em] text-navy">
              {label}
            </span>
          </motion.div>
          <motion.h1
            className="mt-4 font-serif font-bold text-navy tracking-[-0.02em] text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px]"
            style={{ lineHeight: 1.18 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="mt-6 text-text-muted text-[14px] md:text-[15px] leading-[1.95] max-w-xl"
              initial={{ opacity: 0.001, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
