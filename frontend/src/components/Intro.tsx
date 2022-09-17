import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import usePreferenceStatus from "../Context";

//lottie
import { useLottie } from "lottie-react";
import notificationLottie from "../assets/lotties/woman-work.json";

const Intro: FC = () => {
  const { t } = useTranslation();
  const { language } = usePreferenceStatus();

  //lottie settings and variable
  const options = {
    animationData: notificationLottie,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <>
      <div className="flex flex-col-reverse my-6 gap-y-8 md:flex-row md:items-center md:my-12">
        <div className="tracking-wide">
          <p className="font-display text-3xl">{t("greeting")}</p>
          {/* typing animation - change display language according to context */}
          {language === "fr" && (
            <TypeAnimation
              sequence={[
                "Une",
                1000,
                "Une Développeuse",
                1000,
                "Une Développeuse Full-Stack",
                1000,
                "Une Développeuse",
                1000,
                "Une",
                1000,
                "Une Développeuse Full-Stack",
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
              sequence={["A", 1000, "A Full-Stack", 1000, "A Full-Stack Developer", 1000, "A Full-Stack", 1000, "A", 1000, "A Full-Stack Developer", 1000]}
              wrapper="div"
              cursor={true}
              repeat={0}
              style={{ fontSize: "2em", fontFamily: "Raleway", fontWeight: 200, fontStyle: "italic" }}
            />
          )}

          <p className="text-3xl font-display">{t("intro")}</p>
        </div>

        <div className="flex justify-center">
          <div className="w-full sm:w-11/12">{View}</div>
        </div>
      </div>
    </>
  );
};

export default Intro;
