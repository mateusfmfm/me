import { useTranslation } from "react-i18next";
import brasilFlag from "../../../assets/flags/brasil.png";
import ukFlag from "../../../assets/flags/uk.png";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const isPt = i18n.language.startsWith("pt");

  return (
    <div className="lang-switcher">
      <button
        type="button"
        onClick={() => void i18n.changeLanguage("pt-BR")}
        aria-label={t("header.languagePt")}
        aria-pressed={isPt}
        className={`lang-switcher-btn ${isPt ? "lang-switcher-btn-active" : "lang-switcher-btn-idle"}`}
      >
        <img src={brasilFlag} alt="" className="lang-switcher-flag" />
      </button>
      <button
        type="button"
        onClick={() => void i18n.changeLanguage("en")}
        aria-label={t("header.languageEn")}
        aria-pressed={!isPt}
        className={`lang-switcher-btn ${!isPt ? "lang-switcher-btn-active" : "lang-switcher-btn-idle"}`}
      >
        <img src={ukFlag} alt="" className="lang-switcher-flag" />
      </button>
    </div>
  );
}
