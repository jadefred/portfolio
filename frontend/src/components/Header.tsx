import { FC } from "react";
import { useTranslation } from "react-i18next";
import usePreferenceStatus from "../Context";
import { useMediaQuery } from "react-responsive";

//components
import HamburgerMenu from "./HamburgerMenu";

const Header: FC = () => {
  const { t, i18n } = useTranslation();
  const { language, changeLanguage } = usePreferenceStatus();
  const isMobile = useMediaQuery({ query: "(max-width: 400px)" });

  //change language choice, update state in context and update local storage
  const handleLanguageChange = (lang: string): void => {
    changeLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lng", lang);
  };

  return (
    <div>
      <h1 className="text-center text-5xl my-8">Jade Fredenucci</h1>
      {isMobile && <HamburgerMenu handleLanguageChange={handleLanguageChange} />}

      {!isMobile && (
        <div className="flex flex-col items-center gap-y-5 gap-x-6 sm:flex-row justify-center sm:gap-x-10">
          <div>
            <p>{t("home")}</p>
          </div>
          <div>
            <p>{t("projects")}</p>
          </div>
          <div>
            <p>{t("skills")}</p>
          </div>

          {/* language select */}
          <div>
            <label htmlFor="lang-select">{t("language")} : </label>
            <select
              name="lang-select"
              value={language}
              onChange={(event) => handleLanguageChange(event.target.value)}
              className="border border-black bg-bgColor"
            >
              <option value="fr">FRANÇAIS</option>
              <option value="en">ENGLISH</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
