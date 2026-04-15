import { theme } from "@/lib/theme";

type SurfaceProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Reusable translucent overlay panel.
 *
 * Control here:
 * - overlay darkness
 * - blur amount
 * - radius
 * - padding
 */
export default function Surface({
  children,
  className = "",
}: SurfaceProps) {
  return (
    <div
      className={`${theme.surfaces.softOverlay} ${theme.radii.panel} px-6 py-10 sm:px-10 ${className}`}
    >
      {children}
    </div>
  );
}