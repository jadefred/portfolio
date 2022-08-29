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
      <h1 className="text-center text-5xl">Jade Fredenucci</h1>
      <Header />
      <SideBar />
      <h2>{t("intro")}</h2>
    </>
  );
};

export default App;
