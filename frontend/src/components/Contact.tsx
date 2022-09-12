import { FC, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useLottie } from "lottie-react";
import notificationLottie from "../assets/lotties/notification.json";

interface IFormErrorMessage {
  name: string;
  email: string;
  message: string;
}

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Contact: FC = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null);
  const [input, setInput] = useState<IFormInput>({ firstName: "", lastName: "", email: "", message: "" });
  const [errorMsg, setErrorMsg] = useState<IFormErrorMessage>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [btnDisable, setbtnDisable] = useState<boolean>(false);
  const [sendEmailError, setEmailError] = useState<boolean>(false);

  //lottie settings and variable
  const options = {
    animationData: notificationLottie,
    loop: true,
  };
  const { View } = useLottie(options);

  //submit form and send user message to email through the service of emailJS
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const firstName = input.firstName;
    const lastName = input.lastName;
    const email = input.email;
    const message = input.message;

    const emailPattern: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regexName: RegExp = /[a-zA-Z0-9_éèçàÉÈÇÀîÎïÏùÙ]$/;

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      message === "" ||
      !emailPattern.test(email) ||
      regexName.test(firstName) === false ||
      regexName.test(lastName) === false ||
      firstName.length > 40 ||
      lastName.length > 40
    ) {
      //check if input values are filled and in correct format
      if (firstName === "" || lastName === "") {
        setErrorMsg((prev: IFormErrorMessage) => ({ ...prev, name: t("nameErrorMsg") }));
      } else if (
        regexName.test(firstName) === false ||
        regexName.test(lastName) === false ||
        firstName.length > 40 ||
        lastName.length > 40
      ) {
        setErrorMsg((prev: IFormErrorMessage) => ({ ...prev, name: t("nameErrorMsgWrongFormat") }));
      } else {
        setErrorMsg((prev: IFormErrorMessage) => ({ ...prev, name: "" }));
      }

      if (email === "") {
        setErrorMsg((prev: IFormErrorMessage) => ({ ...prev, email: t("emailErrorMsgMissing") }));
      } else if (emailPattern.test(email) === false) {
        setErrorMsg((prev: IFormErrorMessage) => ({ ...prev, email: t("emailErrorMsgWrongFormat") }));
      } else {
        setErrorMsg((prev: IFormErrorMessage) => ({ ...prev, email: "" }));
      }

      if (message === "") {
        setErrorMsg((prev: IFormErrorMessage) => ({ ...prev, message: t("messageErrorMsg") }));
      } else {
        setErrorMsg((prev: IFormErrorMessage) => ({ ...prev, message: "" }));
      }

      setLoading(false);
    } else {
      // emailjs.sendForm("service_j56w46e", "template_v0zlawg", e.currentTarget, "wB1vrmlXi2S2CCwyQ").then(
      //   (result) => {
      //     console.log(result.text);
      //     setSent(true);
      //     setLoading(false);
      //     setbtnDisable(true);
      //     setEmailError(false);
      //     setErrorMsg({ name: "", email: "", message: "" });
      //     setInput({ firstName: "", lastName: "", email: "", message: "" });
      //   },
      //   (error) => {
      //     console.log(error.text);
      //     setLoading(false);
      //     setEmailError(true);
      //     setErrorMsg({ name: "", email: "", message: "" });
      //   }
      // );

      //success
      // setSent(true);
      // setLoading(false);
      // setbtnDisable(true);
      // setErrorMsg({ name: "", email: "", message: "" });
      // setInput({ firstName: "", lastName: "", email: "", message: "" });
      // setEmailError(false);

      //emailJS failed
      setEmailError(true);
      setLoading(false);
      setErrorMsg({ name: "", email: "", message: "" });
    }
  };

  const handleInput = (e: { target: { name: string; value: string } }) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setbtnDisable(false);
    setSent(false);
  };

  return (
    <div className="section-title" id="contact">
      <span className="section-title__span">
        <h2 className="section-title__h2">{t("contactMe")}</h2>
      </span>

      <div className="flex flex-col-reverse md:flex-row">
        {/* form */}
        <form ref={form} onSubmit={sendEmail} className="tracking-wide md:w-2/4">
          <div className="flex flex-col gap-y-6">
            {/* name */}
            <div>
              <p className="mb-1">
                {t("name")}
                <span className="text-xl"> *</span>
              </p>

              <div className="flex flex-col md:flex-row gap-x-2 relative w-full">
                {/* first name  */}
                <div className="flex flex-col-reverse w-full md:w-2/4">
                  <label htmlFor="firstName" className="mt-1">
                    {t("firstName")}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={input.firstName}
                    className="contact__input h-9"
                    onChange={handleInput}
                  />
                </div>

                {/* last name  */}
                <div className="flex flex-col-reverse w-full md:w-2/4">
                  <label htmlFor="lastName" className="mt-1">
                    {t("lastName")}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={input.lastName}
                    onChange={handleInput}
                    className="contact__input h-9"
                  />
                </div>

                {errorMsg.name !== "" && <p className="contact__errorMessage -bottom-5">{errorMsg.name}</p>}
              </div>
            </div>

            {/* email */}
            <div className="flex flex-col relative">
              <label htmlFor="email" className="mb-1">
                E-mail<span className="text-xl"> *</span>
              </label>
              <input type="email" name="email" value={input.email} onChange={handleInput} className="contact__input h-9" />
              {errorMsg.email !== "" && <p className="contact__errorMessage -bottom-6">{errorMsg.email}</p>}
            </div>

            {/* message */}
            <div className="flex flex-col relative">
              <label htmlFor="message" className="mb-1">
                Message<span className="text-xl"> *</span>
              </label>
              <textarea
                name="message"
                cols={10}
                rows={5}
                value={input.message}
                onChange={handleInput}
                className="contact__input min-h-[130px]"
              ></textarea>
              {errorMsg.message !== "" && <p className="contact__errorMessage -bottom-6">{errorMsg.message}</p>}
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* submit button */}
            <input
              type="submit"
              value={loading ? t("loading") : sent ? t("sent") : t("send")}
              className={`my-8 font-semibold text-xl border-2 rounded-full py-3 px-5 tracking-wider transition-colors  ${
                btnDisable
                  ? "border-emerald-700 bg-emerald-700 opacity-70 text-bgColor cursor-default"
                  : "cursor-pointer border-black hover:bg-black hover:text-bgColor"
              }`}
              disabled={btnDisable}
            />
            {sent && !loading && (
              <div className="flex flex-col transition items-center">
                <p>{t("thanksForContactingMe")}</p>
                <p>{t("replayASAP")}</p>
              </div>
            )}

            {sendEmailError && !loading && (
              <div className="flex flex-col items-center transition sm:pr-8">
                <p>{t("sthWentWrong")}</p>
                <p>{t("tryAgain")}</p>
              </div>
            )}
          </div>
        </form>

        {/* lottie animation */}
        <div className="md:w-2/4 md:relative md:-top-10 flex items-center">
          <div>{View}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
