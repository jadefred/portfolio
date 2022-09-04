import { FC, useState } from "react";
import Hamburger from "hamburger-react";
// import "../styles/modal.css";
import Menu from "./Menu";

const HamburgerMenu: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} size={26}/>

      {isOpen && (
        <div className="modal">
          <div className="overlay flex justify-end">
            <div className="mt-3 pr-5">
              <Hamburger toggled={isOpen} toggle={setOpen} size={26} />
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
