import { FC } from "react";
import { useTranslation } from "react-i18next";

//components
import Header from "./components/Header";

const App: FC = () => {
  console.log("app rendered");
  
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <h1>{t("hello")}</h1>
    </>
  );
};

export default App;
