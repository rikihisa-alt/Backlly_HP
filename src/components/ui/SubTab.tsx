"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SubTabItem {
  label: string;
  href: string;
}

interface SubTabProps {
  items: SubTabItem[];
  onItemClick?: () => void;
}

export default function SubTab({ items, onItemClick }: SubTabProps) {
  return (
    <motion.div
      className="border-t border-border bg-white"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-12">
        {/* Mini logo */}
        <div className="opacity-30">
          <Image
            src="/images/logo-backlly.png"
            alt=""
            width={80}
            height={22}
            className="h-5 w-auto"
            aria-hidden="true"
          />
        </div>

        {/* Tab items — right aligned */}
        <div className="flex items-center gap-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-muted hover:text-navy transition-colors"
              onClick={onItemClick}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
