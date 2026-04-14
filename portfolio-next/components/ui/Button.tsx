type ButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export default function Button({ children, href }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition";

  const variantStyles =
    "bg-slate-900 text-white hover:bg-slate-700";

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variantStyles}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variantStyles}`}>
      {children}
    </button>
  );
}