import { FC } from "react";
import { useTranslation } from "react-i18next";

//components
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const App: FC = () => {
  const { t } = useTranslation();

  console.log("app rendered");

  return (
    <div className="relative">
      <h1 className="text-center text-5xl my-8">Jade Fredenucci</h1>
      <Header />
      <SideBar />
      <h2>{t("intro")}</h2>
    </div>
  );
};

export default App;
