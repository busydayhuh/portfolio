export function SectionHeader({
  id,
  text,

  className,
}: {
  id?: string;
  text: string;
  className?: string;
}) {
  return (
    <h3
      className={`text-sm inline-flex w-full gap-2 items-center ${className}`}
      id={id}
    >
      <span className="text-foreground/40 text-nowrap">{text}</span>
      <div className="bg-active w-full h-px" />
    </h3>
  );
}
