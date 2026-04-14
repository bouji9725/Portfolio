type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <span className="rounded-full border border-slate-200 px-3 py-1 text-sm">
      {label}
    </span>
  );
}