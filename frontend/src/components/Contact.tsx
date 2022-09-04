import { FC } from "react";
import { useTranslation } from "react-i18next";

const Contact: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="section-title" id="contact">
      {/* <span className="section-title__span">
        <h2 className="section-title__h2">Contact</h2>
      </span> */}

      <div>
        <div>
          <h2 className="section-title__h2">{t("contactMe")}</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
