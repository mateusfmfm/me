import { useTranslation } from "react-i18next";

export default function Intro() {
  const { t } = useTranslation();

  return (
    <section id="about" className="space-y-4 pt-4 animate-fade-in">
      <div className="status-badge">{t("intro.badge")}</div>
      <h1 className="intro-title">{t("intro.title")}</h1>
      <p className="intro-bio">{t("intro.bio")}</p>
    </section>
  );
}
