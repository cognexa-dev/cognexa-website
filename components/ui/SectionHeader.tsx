interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  titleClassName?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = "",
  titleClassName = "",
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const mx = align === "center" ? "mx-auto" : "";

  return (
    <div className={`${textAlign} ${className}`}>
      {eyebrow && (
        <p className={`mb-3 ${light ? "eyebrow-light" : "eyebrow"}`}>{eyebrow}</p>
      )}
      <h2
        className={`font-display font-bold text-3xl lg:text-5xl leading-tight text-balance
          ${light ? "text-white" : "text-ink"}
          ${mx} max-w-3xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${mx}
            ${light ? "text-white/65" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
