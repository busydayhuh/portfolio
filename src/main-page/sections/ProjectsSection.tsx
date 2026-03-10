import { href, useNavigate } from "react-router-dom";
import Arrow from "../../assets/Arrow";
import gh from "../../assets/github.png";
import globe from "../../assets/globe.png";
import Button from "../../components/Button";
import { SectionHeader } from "../../components/SectionHeader";
import { TechBadge } from "../../components/TechBadge";
import type { Project } from "../../data/projects";
import { PROJECTS } from "../../data/projects";
import { technologiesById } from "../../data/technologies";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <SectionHeader text="проекты" className="mt-2 mb-4 px-basic" />
      <div className="space-y-2 md:space-y-6">
        {PROJECTS.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}

export function Project({ project }: { project: Project }) {
  const {
    title,
    short_desc,
    stack,
    id,
    demo_link,
    github_link,
    cover,
    highlights,
  } = project;
  const navigate = useNavigate();

  return (
    <div
      className="place-items-start gap-4 gap-x-10 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] hover:bg-active md:p-6 py-3 border border-transparent hover:border-border rounded-4xl max-w-7xl transition-colors duration-150 ease-in cursor-pointer card"
      onClick={() => navigate(href("/projects/:id", { id }))}
    >
      <h4 className="inline-flex items-center gap-1.5 h-fit min-h-0 font-medium text-accent text-lg md:text-2xl">
        {title}
        <Arrow className="size-4 md:size-5 card-arrow" />
      </h4>

      <div className="lg:col-start-2 lg:row-span-3 p-0 lg:p-4 w-full">
        <img
          alt={title}
          src={cover}
          loading="lazy"
          className="lg:ms-auto p-1 border border-border rounded-4xl w-full md:max-w-sm aspect-video"
        />
      </div>
      <div className="space-y-4 md:space-y-6 lg:col-start-1 project_description">
        <div className="space-y-2 text-base">{short_desc}</div>
        <div className="flex flex-wrap gap-x-4.75 text-accent text-base">
          {highlights.map((hl) => (
            <span key={hl} className="font-medium tech-hl">
              {hl}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-1.5 lg:col-start-1 project_stack">
          {stack.map((id) => (
            <TechBadge
              text={technologiesById[id].label}
              key={id + technologiesById[id].label}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-8 gap-y-2 lg:col-start-1 mt-2 lg:mt-4 w-full">
        <Button
          href={href("/projects/:id", { id })}
          label="подробнее"
          inApp={true}
        />
        <div className="flex items-center gap-4">
          <Button href={demo_link} label="демо" iconURL={globe} />
          <Button href={github_link} label="github" iconURL={gh} />
        </div>
      </div>
    </div>
  );
}
