import { Link } from "react-router-dom";
import Arrow from "../assets/Arrow";

export default function Button({
  href,
  label,
  iconURL,
  inApp = false,
  variant = "default",
}: {
  href: string;
  label?: string;
  iconURL?: string;
  inApp?: boolean;
  variant?: "round" | "default";
}) {
  const base =
    "border border-border inline-flex items-center gap-1.5 font-medium transition-colors duration-150 shrink-0 hover:bg-active z-10";
  const variants = {
    round:
      "rounded-full size-9 hover:-translate-y-1 transition-transform duration-150 justify-center",
    default: "rounded-3xl text-sm pl-2.5 pr-2 py-1.5",
  };

  if (inApp)
    return (
      <Link
        to={href}
        className={`${base} ${variants[variant]}`}
        onClick={(e) => e.stopPropagation()}
      >
        {label && <span>{label}</span>}
        {iconURL ?
          <img src={iconURL} className="size-5" alt="" />
        : <Arrow className="stroke-2 size-4" />}
      </Link>
    );

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      {label && <span>{label}</span>}
      {iconURL ?
        <img src={iconURL} className="size-5" alt="" />
      : <Arrow className="stroke-2 size-4" />}
    </a>
  );
}
