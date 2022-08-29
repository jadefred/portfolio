import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import usePreferenceStatus from "../Context";

const Intro: FC = () => {
  const { t } = useTranslation();
  const { language } = usePreferenceStatus();

  return (
    <>
      <div>
        <h2 className="font-display text-4xl font-bold">{t("greeting")}</h2>

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
              "Une développeuse web",
              1000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={3}
            style={{ fontSize: "2em", fontFamily: "Raleway", fontWeight: 200, fontStyle: "italic" }}
          />
        )}

        {language === "en" && (
          <TypeAnimation
            sequence={["A", 1000, "A web", 1000, "A web developer", 1000, "A web", 1000, "A web developer", 1000]}
            wrapper="div"
            cursor={true}
            repeat={3}
            style={{ fontSize: "2em", fontFamily: "Raleway", fontWeight: 200, fontStyle: "italic" }}
          />
        )}

        <p className="text-3xl font-display">{t("intro")}</p>
      </div>
    </>
  );
};

export default Intro;
