import { theme } from "@/lib/theme";

type SectionFrameProps = {
  children: React.ReactNode;
  tintClassName?: string;
  className?: string;
};

/**
 * Shared full-width section shell.
 *
 * What to control here:
 * - section background color via `tintClassName`
 * - vertical spacing via `theme.spacing.sectionY`
 * - any extra section-specific classes via `className`
 *
 * IMPORTANT:
 * - Do NOT add borders/shadows here if you want to stay close to main branch.
 */
export default function SectionFrame({
  children,
  tintClassName = "",
  className = "",
}: SectionFrameProps) {
  return (
    <div className={`${tintClassName} ${theme.spacing.sectionY} ${className}`}>
      {children}
    </div>
  );
}