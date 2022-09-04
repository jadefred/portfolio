import { FC } from "react";
import { useTranslation } from "react-i18next";
import usePreferenceStatus from "../Context";
import SideBar from "./SideBar";
import { Link } from "react-scroll";

const Menu: FC = () => {
  const { t, i18n } = useTranslation();
  const { language, changeLanguage } = usePreferenceStatus();

  //change language choice, update state in context and update local storage
  const handleLanguageChange = (lang: string): void => {
    changeLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lng", lang);
  };

  return (
    <div className="flex flex-col items-center gap-y-10 font-medium md:font-normal text-xl md:text-base md:flex-row md:gap-x-10 relative">
      <div>
        <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
          {t("home").toUpperCase()}
        </Link>
      </div>
      <div>
        <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>
          {t("projects").toUpperCase()}
        </Link>
      </div>
      <div>
        <Link to="skills" spy={true} smooth={true} offset={0} duration={500}>
          {t("skills").toUpperCase()}
        </Link>
      </div>

      {/* language select */}
      <div>
        <label htmlFor="lang-select">{t("language")} : </label>
        <select
          name="lang-select"
          value={language}
          onChange={(event) => handleLanguageChange(event.target.value)}
          className="cursor-pointer border border-black rounded-sm bg-transparent px-3 "
        >
          <option value="fr">FRANÇAIS</option>
          <option value="en">ENGLISH</option>
        </select>
      </div>
      <SideBar />
    </div>
  );
};

export default Menu;
