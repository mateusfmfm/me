import { useTranslation } from "react-i18next";
import { projectItems } from "../../../data/cv";
import Project from "../Project";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2 className="section-title">{t("projects.title")}</h2>
        <p className="section-desc">{t("projects.description")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectItems.map((project) => (
          <Project
            key={project.id}
            title={t(`projects.${project.id}.name`)}
            stacks={[...project.stacks]}
            description={t(`projects.${project.id}.description`)}
            icons={[]}
          />
        ))}
      </div>
    </section>
  );
}
