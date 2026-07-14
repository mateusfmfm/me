import { useTranslation } from "react-i18next";
import brasilFlag from "../../../assets/flags/brasil.png";
import ukFlag from "../../../assets/flags/uk.png";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const isPt = i18n.language.startsWith("pt");

  return (
    <div className="flex items-center gap-0.5 p-0.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100/80 dark:bg-slate-800/50">
      <button
        type="button"
        onClick={() => void i18n.changeLanguage("pt-BR")}
        aria-label={t("header.languagePt")}
        aria-pressed={isPt}
        className={`rounded-full p-1 transition-all duration-200 ${
          isPt
            ? "bg-white dark:bg-slate-900 shadow-xs ring-2 ring-blue-500/60"
            : "opacity-50 hover:opacity-80"
        }`}
      >
        <img
          src={brasilFlag}
          alt=""
          className="w-5 h-5 rounded-full object-cover"
        />
      </button>
      <button
        type="button"
        onClick={() => void i18n.changeLanguage("en")}
        aria-label={t("header.languageEn")}
        aria-pressed={!isPt}
        className={`rounded-full p-1 transition-all duration-200 ${
          !isPt
            ? "bg-white dark:bg-slate-900 shadow-xs ring-2 ring-blue-500/60"
            : "opacity-50 hover:opacity-80"
        }`}
      >
        <img
          src={ukFlag}
          alt=""
          className="w-5 h-5 rounded-full object-cover"
        />
      </button>
    </div>
  );
}
