import { useTranslation } from "react-i18next";
import BadgesRow from "../BadgesRow";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="space-y-6">
      {/* Título e Subtítulo da Seção */}
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          {t("skills.title")}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {t("skills.description")}
        </p>
      </div>
      <div>
        <BadgesRow />
      </div>

    </section>
  );
}
