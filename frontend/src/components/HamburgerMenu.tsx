import { FC, useState } from "react";
import Hamburger from "hamburger-react";
import { useTranslation } from "react-i18next";
import usePreferenceStatus from "../Context";
import "../styles/modal.css";

interface IProps {
  handleLanguageChange: (lang: string) => void;
}

const HamburgerMenu: FC<IProps> = ({ handleLanguageChange }) => {
  const { t } = useTranslation();
  const { language } = usePreferenceStatus();
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />

      {isOpen && (
        <div className="modal">
          <div className="overlay">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>

          <div className="modal--content">
            <div className="flex flex-col items-center gap-y-5">
              <div>
                <p>{t("home")}</p>
              </div>
              <div>
                <p>{t("projects")}</p>
              </div>
              <div>
                <p>{t("skills")}</p>
              </div>

              {/* language select */}
              <div>
                <label htmlFor="lang-select">{t("language")} : </label>
                <select
                  name="lang-select"
                  value={language}
                  onChange={(event) => handleLanguageChange(event.target.value)}
                  className="border border-black bg-bgColor"
                >
                  <option value="fr">FRANÇAIS</option>
                  <option value="en">ENGLISH</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
