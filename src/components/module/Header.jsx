import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import CartBtn from "./CartBtn";

const Header = () => {
  const location = useLocation(); 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="h-20 w-full flex flex-row justify-between items-center absolute top-0 shadow font-Urbanist uppercase px-14 bg-white text-black/80">
      <Link
        to={"/"}
        className="h-full flex flex-row justify-start items-center font-bold text-3xl hover:text-orange-400"
      >
        Brew Haven
      </Link>
      <div className="h-full w-1/2 flex flex-row justify-end items-center gap-6">
        <CartBtn />
        <button
          id="menu-button"
          aria-label="Menu"
          aria-controls="menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
          className="text-4xl text-orange-400"
        >
          <GiHamburgerMenu />
        </button>
        <div className={`navigation ${isOpen ? "open" : ""}`}>
          <div className="navigation-content">
            <Navigation toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
