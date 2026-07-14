import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="space-y-6">
      {/* Título da Seção */}
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
        {t("projects.title")}
      </h2>

      {/* Grid de Cards Responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card de Projeto 1 */}
        <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-xs hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
          <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
            {t("projects.bancoBv.tag")}
          </span>
          <h3 className="text-xl font-bold mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {t("projects.bancoBv.name")}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">
            {t("projects.bancoBv.description")}
          </p>
        </div>

        {/* Card de Projeto 2 */}
        <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-xs hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            {t("projects.wowe.tag")}
          </span>
          <h3 className="text-xl font-bold mt-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {t("projects.wowe.name")}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">
            {t("projects.wowe.description")}
          </p>
        </div>
        {/* Card de Projeto 3 */}
        <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-xs hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            {t("projects.wowe.tag")}
          </span>
          <h3 className="text-xl font-bold mt-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {t("projects.wowe.name")}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">
            {t("projects.wowe.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
