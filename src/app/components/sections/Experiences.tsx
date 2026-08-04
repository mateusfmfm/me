import { useTranslation } from "react-i18next";
import bvLogo from "../../../assets/exp/bv.png";
import cercLogo from "../../../assets/exp/cerc.png";
import headsonLogo from "../../../assets/exp/headson.png";
import linxLogo from "../../../assets/exp/linx.png";
import vivaLogo from "../../../assets/exp/viva.png";
import woweLogo from "../../../assets/exp/wowe.png";
import Company from "../Company";

const experiences = [
  { id: "bancoBv", logo: bvLogo },
  { id: "wowe", logo: woweLogo },
  { id: "viva", logo: vivaLogo },
  { id: "cerc", logo: cercLogo },
  { id: "headson", logo: headsonLogo },
  { id: "linx", logo: linxLogo },
] as const;

export default function Experiences() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          {t("experiences.title")}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {t("experiences.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {experiences.map((experience) => (
          <Company
            key={experience.id}
            logo={experience.logo}
            name={t(`experiences.items.${experience.id}.name`)}
            role={t(`experiences.items.${experience.id}.role`)}
            time={t(`experiences.items.${experience.id}.time`)}
            description={t(`experiences.items.${experience.id}.description`)}
          />
        ))}
      </div>
    </section>
  );
}
