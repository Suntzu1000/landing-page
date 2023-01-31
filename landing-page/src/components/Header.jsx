import React from "react";
import Logo from "../assets/favicon_.png";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

import { FaBars } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  return (
    <header className="mb-12 lg:mb-0 z-20 relative px-4 lg:px-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between bg-lime-50 " >
          <div className="flex items-center gap-x-[120px]" >
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>

            <div className="hidden lg:flex">
              <Nav />
            </div>

            <div className="lg:hidden bg-lime-100 ">
              <NavMobile />
            </div>
          </div>

          <button className="btn btn-quaternary flex items-center gap-x-[20px] group">
            Demonstração{" "}
            <BsArrowRight className="text-2xl text-accent-primary group-hover:text-white transition" />
          </button>

          <div className="lg:hidden text-2xl text-primary cursor-pointer">
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
