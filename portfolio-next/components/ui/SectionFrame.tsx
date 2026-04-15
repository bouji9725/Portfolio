import { theme } from "@/lib/theme";

type SectionFrameProps = {
  children: React.ReactNode;
  tintClassName?: string;
  className?: string;
};

/**
 * Shared section background shell.
 *
 * Control here:
 * - section tint color
 * - frame border/shadow
 * - section spacing
 * - blur / overlay feel
 */
export default function SectionFrame({
  children,
  tintClassName = "",
  className = "",
}: SectionFrameProps) {
  return (
    <div
      className={`${tintClassName} ${theme.spacing.sectionY} ${theme.surfaces.frame} ${className}`}
    >
      {children}
    </div>
  );
}