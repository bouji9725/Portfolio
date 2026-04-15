import { theme } from "@/lib/theme";

type CardShellProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Shared card shell.
 *
 * What to control here:
 * - card radius
 * - card shadow
 * - card background
 *
 * Inner padding should be added by the card itself when needed.
 */
export default function CardShell({
  children,
  className = "",
}: CardShellProps) {
  return (
    <div
      className={`${theme.surfaces.card} ${theme.radii.card} ${className}`}
    >
      {children}
    </div>
  );
}