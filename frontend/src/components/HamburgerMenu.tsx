import { FC } from "react";
import Hamburger from "hamburger-react";
// import "../styles/modal.css";
import Menu from "./Menu";
import usePreferenceStatus from "../Context";

interface IScroll {
  scrolled: boolean;
}

const HamburgerMenu: FC<IScroll> = ({ scrolled }) => {
  const { modal, hamburgerToggle } = usePreferenceStatus();

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <Hamburger toggled={modal} toggle={hamburgerToggle} size={26} />

      {modal && (
        <div className="modal">
          <div className="modal animate-overlay flex justify-end bg-bgColor">
            <div className="mt-3 pr-5">
              <Hamburger toggled={modal} toggle={hamburgerToggle} size={26} />
            </div>
          </div>

          <div className="modal--content animate-slideTop top-[40%] -translate-y-2/4 -translate-x-2/4 w-full">
            <Menu scrolled={scrolled} />
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
