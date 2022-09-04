import { FC } from "react";
import { useTranslation } from "react-i18next";

const Contact: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="section-title" id="contact">
      <h2 className="section-title__h2">{t("contactMe")}</h2>

      <form>
        {/* name */}
        <div>
          <p>
            {t("name")}
            <span>*</span>
          </p>
          <div>
            <label htmlFor="firstName">{t("firstName")}</label>
            <input type="text" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">{t("lastName")}</label>
            <input type="text" name="lastName" />
          </div>
        </div>

        {/* email */}
        <div>
          <label htmlFor="email">
            E-mail<span>*</span>
          </label>
          <input type="email" name="email" />
        </div>

        {/* message */}
        <div>
          <label htmlFor="message">
            Message<span>*</span>
          </label>
          <input type="textarea" name="message" />
        </div>

        {/* submit button */}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
