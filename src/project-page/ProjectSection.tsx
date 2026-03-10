import { SectionHeader } from "../components/SectionHeader";

export function ProjectSection({
  text,
  title,
}: {
  text: React.ReactNode;
  title?: string;
}) {
  return (
    <section className="space-y-4 md:space-y-6 px-basic">
      {title && <SectionHeader text={title} />}
      <div className="space-y-2 md:space-y-4 max-w-6xl text-base">{text}</div>
    </section>
  );
}
