import { FC } from "react";
import { useTranslation } from "react-i18next";

const App: FC = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <>
      <h1>{t("hello")}</h1>
      <button onClick={() => handleChange("en")}>English</button>
      <button onClick={() => handleChange("fr")}>Français</button>
    </>
  );
};

export default App;
