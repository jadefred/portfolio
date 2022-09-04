import { FC } from "react";
import { useMediaQuery } from "react-responsive";


//components
import HamburgerMenu from "./HamburgerMenu";
import Menu from "./Menu";

const Header: FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });


  return (
    <div className="flex items-center justify-between md:flex-col px-5 md:px-0 mt-3 md:mt-0" id="home">
      <h1 className="text-center text-3xl md:text-5xl md:my-8">Jade Fredenucci</h1>
      {isMobile && <HamburgerMenu />}
      {!isMobile && <Menu />}
    </div>
  );
};

export default Header;
