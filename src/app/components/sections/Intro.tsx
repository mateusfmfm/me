import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { sectionFade } from "../../motion";
import Contacts from "../Contacts";

export default function Intro() {
  const { t } = useTranslation();

  return (
    <motion.section id="about" className="space-y-4 pt-4" {...sectionFade}>
      <div className="status-badge">{t("intro.badge")}</div>
      <h1 className="intro-title">{t("intro.title")}</h1>
      <p className="intro-bio">{t("intro.bio")}</p>
      <Contacts />
    </motion.section>
  );
}
