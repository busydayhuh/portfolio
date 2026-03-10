export function TechBadge({
  text,
  icon,
}: {
  text: string;
  icon?: React.ReactNode;
}) {
  const size =
    icon ?
      "h-8 md:h-10 text-xs md:text-base rounded-3xl pl-2.5 pr-3 "
    : "h-6 md:h-8 text-xs md:text-sm rounded-2xl px-3";

  return (
    <span
      className={`inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium  shrink-0 ${size}`}
    >
      {icon && icon}
      {text}
    </span>
  );
}
