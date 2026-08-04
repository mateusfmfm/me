import { useTranslation } from "react-i18next";
import BadgesRow from "../BadgesRow";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section">
      <div className="section-header">
        <h2 className="section-title">{t("skills.title")}</h2>
        <p className="section-desc">{t("skills.description")}</p>
      </div>
      <BadgesRow />
    </section>
  );
}
