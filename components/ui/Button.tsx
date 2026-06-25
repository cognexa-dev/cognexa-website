import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost-light" | "ghost-dark" | "crimson" | "teal" | "aqua";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  external?: boolean;
  disabled?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-sapphire-500 text-white hover:bg-sapphire-600 shadow-sm border border-transparent",
  secondary:
    "bg-white text-ink border border-slate-200 hover:border-slate-300 hover:bg-slate-50",
  "ghost-light":
    "bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/10",
  "ghost-dark":
    "bg-transparent text-ink border border-slate-200 hover:border-slate-400",
  crimson:
    "bg-crimson-500 text-white hover:bg-crimson-600 shadow-sm border border-transparent",
  teal:
    "bg-teal-600 text-white hover:bg-teal-700 shadow-sm border border-transparent",
  aqua:
    "bg-aqua-600 text-white hover:bg-aqua-700 shadow-sm border border-transparent",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-xs rounded-md gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-lg gap-2",
  lg: "px-7 py-3.5 text-base rounded-lg gap-2",
};

const base =
  "inline-flex items-center font-semibold transition-all duration-150 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-sapphire-500 focus-visible:ring-offset-2 focus-visible:outline-none";

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className = "",
  type = "button",
  external = false,
  disabled = false,
}: ButtonProps) {
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
