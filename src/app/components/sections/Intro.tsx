import { useTranslation } from "react-i18next";

export default function Intro() {
    const { t } = useTranslation();

    return (
        <section id="about" className="space-y-4 pt-4 animate-fade-in">
            {/* Badge de Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50 w-fit">
                {t("intro.badge")}
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl max-w-3xl">
                {t("intro.title")}
            </h1>

            {/* Texto Biográfico */}
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                {t("intro.bio")}
            </p>
        </section>
    );
}
