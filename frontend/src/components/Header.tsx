import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Header: FC = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<string>("fr");

  //set state as langauge saved in LS if it is not null
  useEffect(() => {
    const storedLang = localStorage.getItem("lng");
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  //change language choice, setState and update local storage
  const handleLanguageChange = (lang: string): void => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lng", lang);
  };

  return (
    <div className="flex flex-col gap-y-4 items-center sm:flex-row sm: gap-x-6 sm:justify-end">
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
        <select name="lang-select" value={language} onChange={(event) => handleLanguageChange(event.target.value)}>
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
