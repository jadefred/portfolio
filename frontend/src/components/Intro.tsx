import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import usePreferenceStatus from "../Context";

const Intro: FC = () => {
  const { t } = useTranslation();
  const { language } = usePreferenceStatus();

  return (
    <>
      <h2>{t("greeting")}</h2>

      {/* typing animation - change display language according to context */}
      {language === "fr" && (
        <TypeAnimation
          sequence={[
            "Une",
            1000,
            "Une développeuse",
            1000,
            "Une développeuse web",
            1000,
            "Une développeuse",
            1000,
            "Une",
            1000,
            "",
            500,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em" }}
        />
      )}

      {language === "en" && (
        <TypeAnimation
          sequence={["A", 1000, "A web", 1000, "A web developer", 1000, "A web", 1000, "A", 1000, "", 500]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em" }}
        />
      )}

      <h2>{t("intro")}</h2>
    </>
  );
};

export default Intro;
