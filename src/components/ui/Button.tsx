"use client";

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
    "bg-navy text-white border border-navy hover:bg-navy-mid",
  secondary:
    "bg-transparent text-navy border border-navy/30 hover:border-navy",
  ghost:
    "bg-transparent text-navy underline underline-offset-4 decoration-navy/30 border-none hover:decoration-navy",
  light:
    "bg-white text-navy border border-white/20 hover:bg-white/90",
};

const sizeStyles = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-sm md:text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
  external,
}: ButtonProps) {
  const className = `inline-block font-sans font-medium rounded transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]}`;

  if (href) {
    const isExternal = external || href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
