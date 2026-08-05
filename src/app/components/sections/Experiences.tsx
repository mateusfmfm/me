import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import bvLogo from "../../../assets/exp/bv.png";
import cercLogo from "../../../assets/exp/cerc.png";
import headsonLogo from "../../../assets/exp/headson.png";
import linxLogo from "../../../assets/exp/linx.png";
import vivaLogo from "../../../assets/exp/viva.png";
import woweLogo from "../../../assets/exp/wowe.png";
import { experienceIds, type ExperienceId } from "../../../data/cv";
import { sectionFade } from "../../motion";
import Company from "../Company";

const logos: Record<ExperienceId, string> = {
  bancoBv: bvLogo,
  wowe: woweLogo,
  viva: vivaLogo,
  cerc: cercLogo,
  headson: headsonLogo,
  linx: linxLogo,
};

export default function Experiences() {
  const { t } = useTranslation();

  return (
    <motion.section id="experience" className="section" {...sectionFade}>
      <div className="section-header">
        <h2 className="section-title">{t("experiences.title")}</h2>
        <p className="section-desc">{t("experiences.description")}</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {experienceIds.map((id) => (
          <Company
            key={id}
            logo={logos[id]}
            name={t(`experiences.items.${id}.name`)}
            role={t(`experiences.items.${id}.role`)}
            time={t(`experiences.items.${id}.time`)}
            description={t(`experiences.items.${id}.description`)}
          />
        ))}
      </div>
    </motion.section>
  );
}
