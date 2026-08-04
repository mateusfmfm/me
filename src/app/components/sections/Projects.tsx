import { useTranslation } from "react-i18next";
import Project from "../Project";

const projects = [
  {
    id: "bancoBv",
    stacks: ["Go", "GraphQL", "Redis"],
    icons: [] as string[],
  },
  {
    id: "wowe",
    stacks: ["Go", "Flutter", "React"],
    icons: [] as string[],
  },
] as const;

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2 className="section-title">{t("projects.title")}</h2>
        <p className="section-desc">{t("projects.description")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={t(`projects.${project.id}.name`)}
            stacks={[...project.stacks]}
            description={t(`projects.${project.id}.description`)}
            icons={[...project.icons]}
          />
        ))}
      </div>
    </section>
  );
}
