/**
 * Shared section wrapper.
 *
 * What to control here:
 * - anchor scroll offset -> scroll-mt-24
 * - shared extra styling -> className prop
 */
type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
}