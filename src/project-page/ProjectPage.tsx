import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import globe from "../assets/globe.png";
import Button from "../components/Button";
import { PROJECTS } from "../data/projects";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { ProjectSection } from "./ProjectSection";
import ProjectStack from "./ProjectStack";

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find((project) => project.id === projectId);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  if (project)
    return (
      <div className="relative space-y-6 md:space-y-8 lg:space-y-10">
        <Header
          name={project.title}
          demo={project.demo_link}
          github={project.github_link}
        />
        <ProjectSection text={project.long_desc} />
        <Gallery images={project.gallery} />
        <ProjectStack stack={project.stack} />
        <ProjectSection text={project.features} title="основные возможности" />
        <ProjectSection
          text={project.architecture}
          title="архитектура и логика приложения"
        />
        <ProjectSection
          text={
            <>
              <div className="inline-flex items-center gap-2">
                <span>Приложение доступно онлайн:</span>
                <Button
                  href={project.demo_link}
                  inApp={false}
                  iconURL={globe}
                  label="открыть демо"
                />
              </div>

              {project.id === "wisharchive" && (
                <p>
                  Для входа используйте кнопку{" "}
                  <strong>«Войти в демо-аккаунт»</strong> на странице
                  авторизации.
                </p>
              )}
            </>
          }
          title="демо"
        />
      </div>
    );
}
