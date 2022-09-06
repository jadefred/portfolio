import { FC } from "react";
import { useTranslation } from "react-i18next";

const Contact: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="section-title" id="contact">
      <h2 className="section-title__h2">{t("contactMe")}</h2>

      <form>
        <div className="flex flex-col gap-y-6">
          {/* name */}
          <div>
            <p className="mb-1">
              {t("name")}
              <span className="text-xl"> *</span>
            </p>

            {/* first name  */}
            <div className="flex gap-x-10">
              <div className="flex flex-col-reverse w-2/4">
                <label htmlFor="firstName" className="mt-1">
                  {t("firstName")}
                </label>
                <input type="text" name="firstName" className="contact__input--text" />
              </div>

              {/* last name  */}
              <div className="flex flex-col-reverse w-2/4">
                <label htmlFor="lastName" className="mt-1">
                  {t("lastName")}
                </label>
                <input type="text" name="lastName" className="contact__input--text" />
              </div>
            </div>
          </div>

          {/* email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">
              E-mail<span className="text-xl"> *</span>
            </label>
            <input type="email" name="email" className="contact__input--text" />
          </div>

          {/* message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1">
              Message<span className="text-xl"> *</span>
            </label>
            <input type="textarea" name="message" className="contact__input--text" />
          </div>
        </div>

        {/* submit button */}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
