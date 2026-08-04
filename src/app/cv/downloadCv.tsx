import { pdf } from "@react-pdf/renderer";
import type { TFunction } from "i18next";
import { experienceIds, projectItems, skillNames } from "../../data/cv";
import CvDocument, { type CvContent } from "./CvDocument";

export function buildCvContent(t: TFunction): CvContent {
  return {
    name: "Mateus Félix",
    title: t(""),
    bio: t("intro.bio"),
    skillsTitle: t("skills.title"),
    skills: [...skillNames],
    experiencesTitle: t("experiences.title"),
    experiences: experienceIds.map((id) => ({
      name: t(`experiences.items.${id}.name`),
      role: t(`experiences.items.${id}.role`),
      time: t(`experiences.items.${id}.time`),
      description: t(`experiences.items.${id}.description`),
    })),
    projectsTitle: t("projects.title"),
    projects: projectItems.map((project) => ({
      name: t(`projects.${project.id}.name`),
      stacks: [...project.stacks],
      description: t(`projects.${project.id}.description`),
    })),
  };
}

export async function downloadCv(t: TFunction, language: string) {
  const content = buildCvContent(t);
  const blob = await pdf(<CvDocument content={content} />).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const suffix = language.startsWith("pt") ? "pt-BR" : "en";

  link.href = url;
  link.download = `Mateus-Felix-CV-${suffix}.pdf`;
  link.click();

  URL.revokeObjectURL(url);
}
