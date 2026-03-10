import { SectionHeader } from "../components/SectionHeader";
import { TechBadge } from "../components/TechBadge";
import { technologiesById } from "../data/technologies";

export default function ProjectStack({ stack }: { stack: number[] }) {
  return (
    <section className="space-y-4 md:space-y-8 mt-8 md:mt-10 lg:mt-12 px-basic">
      <SectionHeader text="технологии и инструменты" />
      <div className="flex flex-wrap items-center gap-2 max-w-5xl">
        {stack.map((id) => (
          <TechBadge
            text={technologiesById[id].label}
            key={id + technologiesById[id].label}
          />
        ))}
      </div>
    </section>
  );
}
