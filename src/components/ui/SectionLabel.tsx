interface SectionLabelProps {
  children: React.ReactNode;
  /** "default" = navy, "accent" = brand, "light" = white(/85) */
  color?: "default" | "accent" | "light" | "cyan";
}

/**
 * 共通セクションラベル
 * 例: <SectionLabel>VISION</SectionLabel>
 *
 * 仕様(統一):
 *   font-sans / font-bold / text-[12px] md:text-[13px]
 *   tracking-[0.18em] / 色は navy (デフォルト)
 *   先頭の縦バー等の装飾は持たない（必要な場面では個別に組む）
 */
export default function SectionLabel({
  children,
  color = "default",
}: SectionLabelProps) {
  const colorClass =
    color === "accent" || color === "cyan"
      ? "text-brand"
      : color === "light"
      ? "text-white/85"
      : "text-navy";

  return (
    <span
      className={`font-sans font-bold text-[12px] md:text-[13px] tracking-[0.18em] ${colorClass}`}
    >
      {children}
    </span>
  );
}
