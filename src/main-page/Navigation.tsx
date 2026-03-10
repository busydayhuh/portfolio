import { Link } from "react-router-dom";

export function Navigation({
  activeSection,
  scrollToSection,
}: {
  activeSection: "stack" | "projects" | "contacts";
  scrollToSection: (id: "stack" | "projects" | "contacts") => void;
}) {
  return (
    <nav className="top-0 xl:top-4 xl:right-10 z-10 xl:fixed sticky bg-background mb-2 xl:mb-0 xl:text-right">
      <ul className="flex xl:flex-col justify-between items-center xl:items-end xl:gap-2 px-4 xl:px-0 py-2 xl:py-0 *:hover:text-accent *:text-[clamp(1rem,3vw,1.5rem)] *:transition-all *:duration-200">
        <li className={activeSection === "stack" ? "active-nav" : ""}>
          <Link to={"."} onClick={() => scrollToSection("stack")}>
            стек
          </Link>
        </li>
        <li className={activeSection === "projects" ? "active-nav" : ""}>
          <Link to={"."} onClick={() => scrollToSection("projects")}>
            проекты
          </Link>
        </li>
        <li className={activeSection === "contacts" ? "active-nav" : ""}>
          <Link to={"."} onClick={() => scrollToSection("contacts")}>
            контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}
