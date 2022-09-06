import { FC, useRef } from "react";
import { useTranslation } from "react-i18next";
import workingImage from "../assets/images/working.png";
import emailjs from "@emailjs/browser";

const Contact: FC = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm("service_j56w46e", "template_v0zlawg", e.currentTarget, "wB1vrmlXi2S2CCwyQ").then(
      (result) => {
        console.log(result.text);
        if (form.current) form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="section-title" id="contact">
      <h2 className="section-title__h2">{t("contactMe")}</h2>

      <div className="flex">
        <form ref={form} onSubmit={sendEmail} className="tracking-wide">
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
                  <input type="text" name="firstName" className="contact__input h-9" required />
                </div>

                {/* last name  */}
                <div className="flex flex-col-reverse w-2/4">
                  <label htmlFor="lastName" className="mt-1">
                    {t("lastName")}
                  </label>
                  <input type="text" name="lastName" className="contact__input h-9" required />
                </div>
              </div>
            </div>

            {/* email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">
                E-mail<span className="text-xl"> *</span>
              </label>
              <input type="email" name="email" className="contact__input h-9" required />
            </div>

            {/* message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1">
                Message<span className="text-xl"> *</span>
              </label>
              <textarea name="message" cols={10} rows={5} className="contact__input min-h-[130px]" required></textarea>
            </div>
          </div>

          {/* submit button */}
          <input
            type="submit"
            value={t("send")}
            className="my-8 cursor-pointer font-semibold text-xl border-2 border-black rounded-full py-3 px-5 tracking-wider transition-colors hover:bg-black hover:text-bgColor"
          />
        </form>

        <div>
          <img src={workingImage} alt="illustration of a working girl" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
