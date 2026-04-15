type SectionProps = {
  id?: string;
  children: React.ReactNode;
};

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      {children}
    </section>
  );
}