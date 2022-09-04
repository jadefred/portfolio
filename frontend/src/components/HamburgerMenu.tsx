import { FC } from "react";
import Hamburger from "hamburger-react";
// import "../styles/modal.css";
import Menu from "./Menu";
import usePreferenceStatus from "../Context";

const HamburgerMenu: FC = () => {
  const { modal, hamburgerToggle } = usePreferenceStatus();

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <Hamburger toggled={modal} toggle={hamburgerToggle} size={26} />

      {modal && (
        <div className="modal">
          <div className="overlay flex justify-end">
            <div className="mt-3 pr-5">
              <Hamburger toggled={modal} toggle={hamburgerToggle} size={26} />
            </div>
          </div>

          <div className="modal--content">
            <Menu />
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
