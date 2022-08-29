import { FC } from "react";
import { useTranslation } from "react-i18next";
import usePreferenceStatus from "../Context";

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
    <div className="flex flex-col items-center gap-y-5">
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
  );
};

export default Menu;
