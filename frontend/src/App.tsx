import { FC } from "react";
import { useTranslation } from "react-i18next";

//components
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const App: FC = () => {
  const { t } = useTranslation();

  console.log("app rendered");

  return (
    <>
      <Header />
      <SideBar />
      <h1>{t("intro")}</h1>
    </>
  );
};

export default App;
