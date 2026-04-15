import type { RefObject } from "react";

/**
 * Shared section wrapper.
 *
 * What to control here:
 * - anchor scroll offset -> scroll-mt-24
 * - extra styling -> className
 * - visibility tracking -> refProp
 */
type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  refProp?: RefObject<HTMLElement | null>;
};

export default function Section({
  id,
  children,
  className = "",
  refProp,
}: SectionProps) {
  return (
    <section id={id} ref={refProp} className={`scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
}