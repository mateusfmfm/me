import { useTranslation } from "react-i18next";
import Button from "../Button";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
    const { t } = useTranslation();

    return (
        <header className="w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo / Nome */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                        Mateus Félix
                    </span>
                </div>

                {/* Espaço para ações futuras (ex: Dark Mode, Idioma) */}
                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
                        <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("header.about")}</a>
                        <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("header.experience")}</a>
                        <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("header.projects")}</a>
                    </nav>
                    <Button variant={"outline"}>{t("header.downloadCv")}</Button>
                    <LanguageSwitcher />
                    {/* O botão de ThemeToggle vai entrar aqui depois! */}
                    <div id="theme-toggle-slot"></div>
                </div>
            </div>
        </header>
    );
}
