import { FC } from "react";
import { useTranslation } from "react-i18next";

//components
import Header from "./components/Header";

const App: FC = () => {
  const { t, i18n } = useTranslation();

  // const handleChange = (lng: string): void => {
  //   i18n.changeLanguage(lng);
  //   localStorage.setItem("lng", lng);
  // };

  return (
    <>
      <Header />
      <h1>{t("hello")}</h1>
      {/* <button onClick={() => handleChange("en")}>English</button>
      <button onClick={() => handleChange("fr")}>Français</button>
      <button onClick={() => handleChange("zh")}>繁體中文</button> */}
    </>
  );
};

export default App;
