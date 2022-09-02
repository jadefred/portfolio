import { FC } from "react";
import { useTranslation } from "react-i18next";

//svg
import html from "../assets/images/skills/html.svg";
import css from "../assets/images/skills/css.svg";
import js from "../assets/images/skills/js.svg";
import sass from "../assets/images/skills/sass.svg";
import node from "../assets/images/skills/node.svg";
import mongodb from "../assets/images/skills/mongodb.svg";
import react from "../assets/images/skills/react.svg";
import typescript from "../assets/images/skills/typescript.svg";
import redux from "../assets/images/skills/redux.svg";

const Skills: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <span className="before:block before:absolute before:top-8 before:right-5 before:left-0 before:-bottom-1 before:bg-pink-500 relative inline-block mb-8">
        <h2 className="font-semibold text-2xl relative">{t("skills")}</h2>
      </span>

      <img src={html} alt="HTML" />
      <img src={css} alt="CSS" className="w-44"/>
      <img src={js} alt="JavaScript" />
      <img src={sass} alt="SASS" />
      <img src={node} alt="NodeJS" />
      <img src={mongodb} alt="MongoDB" />
      <img src={react} alt="React" />
      <img src={typescript} alt="TypeScript" />
      <img src={redux} alt="Redux" />
    </>
  );
};

export default Skills;
