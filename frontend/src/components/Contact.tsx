import { FC, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import workingImage from "../assets/images/working.png";
import emailjs from "@emailjs/browser";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const Contact: FC = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null);
  const [errorMsg, setErrorMsg] = useState<IFormInput>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [btnDisable, setbtnDisable] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    //get all form input values
    const firstName = (e.currentTarget.elements.namedItem("firstName") as HTMLInputElement).value;
    const lastName = (e.currentTarget.elements.namedItem("lastName") as HTMLInputElement).value;
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    const message = (e.currentTarget.elements.namedItem("message") as HTMLInputElement).value;
    const emailPattern: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (firstName === "" || lastName === "" || email === "" || message === "" || !emailPattern.test(email)) {
      //check if input values are filled and in correct format
      if (firstName === "" || lastName === "") {
        setErrorMsg((prev: IFormInput) => ({ ...prev, name: t("nameErrorMsg") }));
      } else {
        setErrorMsg((prev: IFormInput) => ({ ...prev, name: "" }));
      }

      if (email === "") {
        setErrorMsg((prev: IFormInput) => ({ ...prev, email: t("emailErrorMsgMissing") }));
      } else if (emailPattern.test(email) === false) {
        setErrorMsg((prev: IFormInput) => ({ ...prev, email: t("emailErrorMsgWrongFormat") }));
      } else {
        setErrorMsg((prev: IFormInput) => ({ ...prev, email: "" }));
      }

      if (message === "") {
        setErrorMsg((prev: IFormInput) => ({ ...prev, message: t("messageErrorMsg") }));
      } else {
        setErrorMsg((prev: IFormInput) => ({ ...prev, message: "" }));
      }

      setLoading(false);
    } else {
      emailjs.sendForm("service_j56w46e", "template_v0zlawg", e.currentTarget, "wB1vrmlXi2S2CCwyQ").then(
        (result) => {
          console.log(result.text);
          //reset form
          if (form.current) form.current.reset();
          setSent(true);
          setLoading(false);
          setErrorMsg({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setErrorMsg({ name: "", email: "", message: "" });
        }
      );
    }
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

              <div className="flex gap-x-10 relative">
                {/* first name  */}
                <div className="flex flex-col-reverse w-2/4">
                  <label htmlFor="firstName" className="mt-1">
                    {t("firstName")}
                  </label>
                  <input type="text" name="firstName" className="contact__input h-9" />
                </div>

                {/* last name  */}
                <div className="flex flex-col-reverse w-2/4">
                  <label htmlFor="lastName" className="mt-1">
                    {t("lastName")}
                  </label>
                  <input type="text" name="lastName" className="contact__input h-9" />
                </div>

                {errorMsg.name !== "" && <p className="contact__errorMessage -bottom-5">{errorMsg.name}</p>}
              </div>
            </div>

            {/* email */}
            <div className="flex flex-col relative">
              <label htmlFor="email" className="mb-1">
                E-mail<span className="text-xl"> *</span>
              </label>
              <input type="email" name="email" className="contact__input h-9" />
              {errorMsg.email !== "" && <p className="contact__errorMessage -bottom-6">{errorMsg.email}</p>}
            </div>

            {/* message */}
            <div className="flex flex-col relative">
              <label htmlFor="message" className="mb-1">
                Message<span className="text-xl"> *</span>
              </label>
              <textarea name="message" cols={10} rows={5} className="contact__input min-h-[130px]"></textarea>
              {errorMsg.message !== "" && <p className="contact__errorMessage -bottom-6">{errorMsg.message}</p>}
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* submit button */}
            <input
              type="submit"
              value={loading ? t("loading") : sent ? t("sent") : t("send")}
              className={`my-8 cursor-pointer font-semibold text-xl border-2 rounded-full py-3 px-5 tracking-wider transition-colors  ${
                btnDisable ? "border-emerald-700 bg-emerald-700 text-bgColor" : "border-black hover:bg-black hover:text-bgColor"
              }`}
              disabled={btnDisable}
            />
            {sent && (
              <div className={`flex flex-col items-center transition`}>
                <p>{t("thanksForContactingMe")}</p>
                <p>{t("replayASAP")}</p>
              </div>
            )}
          </div>
        </form>

        <div>
          <img src={workingImage} alt="illustration of a working girl" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
