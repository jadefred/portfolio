import { FC, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

//components
import HamburgerMenu from "./HamburgerMenu";
import Menu from "./Menu";

const Header: FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setScrolled(window.pageYOffset > 20));
    }
  }, []);

  return (
    <div
      className={`flex z-40 bg-bgColor transition-all px-5 ${
        scrolled ? "fixed top-0 justify-between w-full py-3 lg:px-10" : "md:flex-col justify-between items-center"
      }`}
    >
      <h1 className={`text-center text-2xl transition-all ${scrolled ? "m-0" : "my-7 md:text-5xl"}`}>Jade Fredenucci</h1>
      {isMobile && <HamburgerMenu scrolled={scrolled} />}
      {!isMobile && <Menu scrolled={scrolled} />}
    </div>
  );
};

export default Header;
