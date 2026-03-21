"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  external?: boolean;
}

const variantStyles = {
  primary:
    "bg-navy text-white hover:opacity-90 border border-transparent",
  secondary:
    "bg-transparent text-navy border border-navy hover:bg-navy hover:text-white",
  ghost:
    "bg-transparent text-navy underline underline-offset-4 border-none hover:text-cyan",
  light:
    "bg-white text-navy hover:bg-white/90 border border-transparent",
};

const sizeStyles = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-6 py-4 text-base md:text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
  external,
}: ButtonProps) {
  const className = `inline-block font-sans font-medium rounded-lg transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]}`;

  if (href) {
    const isExternal = external || href.startsWith("http");
    if (isExternal) {
      return (
        <motion.a
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
