type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
      {children}
    </h2>
  );
}