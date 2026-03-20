"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const variantStyles = {
  primary:
    "bg-cyan text-white hover:bg-[#00a8b0] border border-transparent",
  secondary:
    "bg-transparent text-navy border border-navy hover:bg-navy hover:text-white",
  ghost:
    "bg-transparent text-navy underline underline-offset-4 border-none hover:text-cyan",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
}: ButtonProps) {
  const className = `inline-block font-sans font-medium rounded transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
