interface SectionLabelProps {
  children: React.ReactNode;
  color?: "default" | "cyan";
}

export default function SectionLabel({ children, color = "default" }: SectionLabelProps) {
  const textColor = color === "cyan" ? "text-cyan" : "text-navy";

  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-[2px] h-4 bg-cyan" />
      <span className={`font-mono text-xs tracking-[0.2em] uppercase ${textColor}`}>
        {children}
      </span>
    </div>
  );
}
