import { FC, useEffect, useState, useRef } from "react";
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
  const [dropdown, setDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);

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

  //click anywhere outside the dropdown menu to close it
  useEffect(() => {
    const handleDropdown = (event: MouseEvent) => {
      //fire function if mouse event is outside dropdown menu and button while dropdown menu is opened
      if (
        !dropdownRef.current?.contains(event.target as HTMLElement) &&
        !dropdownButtonRef.current?.contains(event.target as HTMLElement) &&
        dropdown
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleDropdown);
    return () => document.removeEventListener("mousedown", handleDropdown);
  }, [dropdown]);

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
      className={`flex flex-col items-center gap-y-10 text-xl md:text-base md:flex-row relative dark:text-darkModeText ${
        scrolled ? "md:gap-x-8" : "md:gap-x-10 "
      }`}
    >
      <div>
        {/* toggleModal on p tag - to goggle hamburger menu when media query is activated */}
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
      <div className="flex gap-x-3">
        <p>{t("language")} : </p>
        <div className="relative">
          <button
            ref={dropdownButtonRef}
            onClick={() => setDropdown((prev) => !prev)}
            className="border-b w-24 border-black dark:border-bgColor flex justify-between pl-1"
          >
            {language === "fr" ? "Français" : "English"}
            <img src={darkMode === "true" ? arrowDownWhite : arrowDownBlack} alt="Downward arrow" />
          </button>
          {dropdown && (
            <div ref={dropdownRef} className="absolute flex flex-col text-center top-7 z-40">
              <div className="language__dropdown--elements" onClick={() => handleLanguageChange("fr")}>
                <p>Français</p>
              </div>
              <div className="language__dropdown--elements" onClick={() => handleLanguageChange("en")}>
                <p>English</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div onClick={handleDarkMode} className="w-7 h-7 flex justify-center items-center cursor-pointer">
        {darkMode === "true" ? (
          <img src={moon} alt="dark mode" className="w-6 h-6" />
        ) : (
          <img src={sun} alt="light mode" className="w-full h-full" />
        )}
      </div>

      <SideBar />
    </div>
  );
};

export default Menu;
