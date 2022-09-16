import { FC } from "react";
import { useTranslation } from "react-i18next";
import usePreferenceStatus from "../Context";
import SideBar from "./SideBar";
import { Link } from "react-scroll";

interface IScroll {
  scrolled: boolean;
}

const Menu: FC<IScroll> = ({ scrolled }) => {
  const { t, i18n } = useTranslation();
  const { language, changeLanguage, modal, toggleModal, darkMode, toggleDarkMode } = usePreferenceStatus();

  //change language choice, update state in context and update local storage
  const handleLanguageChange = (lang: string): void => {
    changeLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lng", lang);
  };

  const handleDarkMode = (): void => {
    if (darkMode === "false") {
      toggleDarkMode("true");
      localStorage.setItem("darkMode", "true");
      document.documentElement.classList.add("dark");
    } else {
      toggleDarkMode("false");
      localStorage.setItem("darkMode", "false");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className={`flex flex-col items-center gap-y-10 font-medium md:font-normal text-xl md:text-base md:flex-row relative ${
        scrolled ? "md:gap-x-8" : "md:gap-x-10 "
      }`}
    >
      <div>
        <Link to="home" spy={true} smooth={true} offset={-30} duration={500}>
          <p onClick={() => toggleModal(modal)} className="cursor-pointer">
            {t("home")}
          </p>
        </Link>
      </div>
      <div>
        <Link to="projects" spy={true} smooth={true} offset={-80} duration={500}>
          <p onClick={() => toggleModal(modal)} className="cursor-pointer">
            {t("projects")}
          </p>
        </Link>
      </div>
      <div>
        <Link to="skills" spy={true} smooth={true} offset={-80} duration={500}>
          <p onClick={() => toggleModal(modal)} className="cursor-pointer">
            {t("skills")}
          </p>
        </Link>
      </div>
      <div>
        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
          <p onClick={() => toggleModal(modal)} className="cursor-pointer">
            Contact
          </p>
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
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </div>

      <div>
        <button onClick={handleDarkMode}>Dark mode</button>
      </div>
      <SideBar />
    </div>
  );
};

export default Menu;
