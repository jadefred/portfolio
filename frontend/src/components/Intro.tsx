import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import usePreferenceStatus from "../Context";
import workingImage from "../assets/images/working.png";

const Intro: FC = () => {
  const { t } = useTranslation();
  const { language } = usePreferenceStatus();

  return (
    <>
      <div className="flex flex-col-reverse my-6 gap-y-8 md:flex-row md:items-center md:my-12">
        <div>
          <p className="font-display text-3xl">{t("greeting")}</p>
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
                "Une développeuse web",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={0}
              style={{ fontSize: "2em", fontFamily: "Raleway", fontWeight: 200, fontStyle: "italic" }}
            />
          )}

          {language === "en" && (
            <TypeAnimation
              sequence={["A", 1000, "A web", 1000, "A web developer", 1000, "A web", 1000, "A", 1000, "A web developer", 1000]}
              wrapper="div"
              cursor={true}
              repeat={0}
              style={{ fontSize: "2em", fontFamily: "Raleway", fontWeight: 200, fontStyle: "italic" }}
            />
          )}

          <p className="text-3xl font-display">{t("intro")}</p>
        </div>

        <div className="flex justify-center">
          <img src={workingImage} alt="illustration of a working girl" className="w-11/12" />
        </div>
      </div>
    </>
  );
};

export default Intro;
