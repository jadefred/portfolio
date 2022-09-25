import { FC } from "react";
import { useLottie } from "lottie-react";
import notFoundLottie from "../assets/lotties/404not-found.json";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  const { t } = useTranslation();

  //lottie settings and variable
  const options = {
    animationData: notFoundLottie,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <>
      <div className="w-11/12 md:w-3/5 lg:w-2/5 mx-auto mt-16 ">
        <div>{View}</div>
        <div className="text-center mt-6">
          <h1 className="font-semibold text-2xl font-sans mb-3">{t("pageNotFound")}</h1>
          <Link to="/">
            <button className="bg-black dark:bg-bgColor px-3 py-1">
              <p className="text-white dark:text-black">{t("backToHomePage")}</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
