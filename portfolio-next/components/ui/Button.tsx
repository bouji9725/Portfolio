type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition";

  const variantStyles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-700"
      : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50";

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variantStyles}`}>
        {children}
      </a>
    );
  }

  return <button className={`${baseStyles} ${variantStyles}`}>{children}</button>;
}