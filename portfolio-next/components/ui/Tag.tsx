type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700">
      {label}
    </span>
  );
}