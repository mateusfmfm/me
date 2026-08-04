import { useTranslation } from "react-i18next";
import Button from "../Button";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="flex items-center gap-2">
          <span className="brand-gradient">Mateus Félix</span>
        </div>

        <div className="flex items-center gap-4">
          <nav className="nav-links">
            <a href="#about" className="nav-link">
              {t("header.about")}
            </a>
            <a href="#experience" className="nav-link">
              {t("header.experience")}
            </a>
            <a href="#projects" className="nav-link">
              {t("header.projects")}
            </a>
          </nav>
          <Button variant="outline">{t("header.downloadCv")}</Button>
          <LanguageSwitcher />
          <div id="theme-toggle-slot"></div>
        </div>
      </div>
    </header>
  );
}
