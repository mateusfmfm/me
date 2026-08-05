import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { sectionFade } from "../../motion";
import BadgesRow from "../BadgesRow";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <motion.section id="skills" className="section" {...sectionFade}>
      <div className="section-header">
        <h2 className="section-title">{t("skills.title")}</h2>
        <p className="section-desc">{t("skills.description")}</p>
      </div>
      <BadgesRow />
    </motion.section>
  );
}
