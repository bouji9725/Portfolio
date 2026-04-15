import type { RefObject } from "react";

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