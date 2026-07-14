import { useTranslation } from "react-i18next";

export default function Experiences() {
    const { t } = useTranslation();

    return (
      <section id="experience" className="space-y-6">
        {/* Título e Subtítulo da Seção */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            {t("experiences.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            {t("experiences.description")}
          </p>
        </div>
  
        {/* Placeholder para a estrutura de abas interativas */}
        <div className="p-8 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl text-slate-400 dark:text-slate-600 bg-white/30 dark:bg-slate-900/30 backdrop-blur-xs">
          {t("experiences.tabsPlaceholder")}
        </div>
      </section>
    );
  }
