export function InputElement({
  placeholder,
  type,
}: {
  placeholder: string;
  type: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="rounded-lg border h-12 w-full pl-4 bg-transparent text-bases border-dark_gray"
    />
  );
}
