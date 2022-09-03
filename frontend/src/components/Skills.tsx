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
import postgresql from "../assets/images/skills/postgresql.svg";
import tailwind from "../assets/images/skills/tailwind.svg";

const Skills: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-24">
      <span className="before:block before:absolute before:top-8 before:right-5 before:left-0 before:-bottom-1 before:bg-pink-500 relative inline-block mb-14">
        <h2 className="font-semibold text-2xl relative">{t("skills")}</h2>
      </span>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-2 md:grid-cols-4 md:gap-x-0 lg:grid-cols-6 lg:gap-y-9">
        {/* cards */}
        <div className="skills-icons-container">
          <div className="skills-icons-size">
            <img src={html} alt="HTML" className="w-full" />
          </div>
          <p>HTML</p>
        </div>

        <div className="skills-icons-container">
          <div className="skills-icons-size">
            <img src={css} alt="CSS" className="w-full" />
          </div>
          <p>CSS</p>
        </div>

        <div className="skills-icons-container">
          <div className="skills-icons-size">
            <img src={sass} alt="SASS" className="w-full" />
          </div>
          <p>SASS</p>
        </div>

        <div className="skills-icons-container">
          <div className="skills-icons-size">
            <img src={tailwind} alt="TailwindCSS" className="w-full" />
          </div>
          <p>TailwindCSS</p>
        </div>

        <div className="skills-icons-container">
          <div className="skills-icons-size">
            <img src={mongodb} alt="MongoDB" className="w-full" />
          </div>
          <p>MongoDB</p>
        </div>

        <div className="skills-icons-container">
          <div className="skills-icons-size">
            <img src={postgresql} alt="PostgreSQL" className="w-full" />
          </div>
          <p>PostgreSQL</p>
        </div>

        <div className="skills-icons-container">
          <div className="skills-icons-size">
            <img src={node} alt="NodeJS" className="w-full" />
          </div>
          <p>NodeJS</p>
        </div>

        <div className="skills-icons-container">
          <div className="skills-icons-size">
            <img src={js} alt="JavaScript" className="w-full" />
          </div>
          <p>JavaScript</p>
        </div>

        <div className="skills-icons-container">
          <div className="skills-icons-size">
            <img src={typescript} alt="TypeScript" className="w-full" />
          </div>
          <p>TypeScript</p>
        </div>

        <div className="skills-icons-container">
          <div className="skills-icons-size">
            <img src={react} alt="React" className="w-full" />
          </div>
          <p>React</p>
        </div>

        <div className="skills-icons-container">
          <div className="skills-icons-size">
            <img src={redux} alt="Redux" className="w-full" />
          </div>
          <p>Redux</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
