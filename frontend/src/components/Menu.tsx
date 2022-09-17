import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import usePreferenceStatus from "../Context";
import SideBar from "./SideBar";
import { Link } from "react-scroll";

//svg
import moon from "../assets/images/moon.svg";
import sun from "../assets/images/sun.svg";
import arrowDownBlack from "../assets/images/arrow-down-black.svg";
import arrowDownWhite from "../assets/images/arrow-down-white.svg";

interface IScroll {
  scrolled: boolean;
}

const Menu: FC<IScroll> = ({ scrolled }) => {
  const { t, i18n } = useTranslation();
  const { language, changeLanguage, modal, toggleModal, darkMode, toggleDarkMode } = usePreferenceStatus();

  //test
  const [dropdown, setDropdown] = useState<boolean>(false);

  //change language choice, update state in context and update local storage
  const handleLanguageChange = (lang: string): void => {
    changeLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lng", lang);
    setDropdown(false);
  };

  //add or remove dark mode class once loaded
  useEffect(() => {
    if (darkMode === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  //toggle dark mode, update context and local storage
  const handleDarkMode = (): void => {
    if (darkMode === "false") {
      toggleDarkMode("true");
      localStorage.setItem("darkMode", "true");
    } else {
      toggleDarkMode("false");
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <div
      className={`flex flex-col items-center gap-y-10 font-medium md:font-normal text-xl md:text-base md:flex-row relative dark:text-darkModeText ${
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
      {/* <div>
        <label htmlFor="lang-select">{t("language")} : </label>
        <select
          name="lang-select"
          value={language}
          onChange={(event) => handleLanguageChange(event.target.value)}
          className="cursor-pointer border border-black dark:border-darkModeText rounded-sm bg-transparent px-3 "
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </div> */}

      <div className="flex gap-x-3">
        <p>{t("language")} : </p>
        <div className="relative">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="border-b w-24 border-black dark:border-bgColor flex justify-between pl-1"
          >
            {language === "fr" ? "Français" : "English"}
            <img src={darkMode === "true" ? arrowDownWhite : arrowDownBlack} alt="Downward arrow" />
          </button>
          {dropdown && (
            <div className="absolute flex flex-col text-center top-7 border border-gray-300">
              <p
                className={`bg-transparentWhite w-24 py-0.5 cursor-pointer ${language === "fr" ? "bg-green-400" : ""}`}
                onClick={() => handleLanguageChange("fr")}
              >
                Français
              </p>
              <p
                className={`bg-transparentWhite w-24 py-0.5 cursor-pointer ${language === "en" ? "bg-green-400" : ""}`}
                onClick={() => handleLanguageChange("en")}
              >
                English
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-x-2">
        <div onClick={handleDarkMode} className="w-7 h-7 flex justify-center items-center cursor-pointer">
          {darkMode === "true" ? (
            <img src={moon} alt="dark mode" className="w-6 h-6" />
          ) : (
            <img src={sun} alt="light mode" className="w-full h-full" />
          )}
        </div>
      </div>

      <SideBar />
    </div>
  );
};

export default Menu;
