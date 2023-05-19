import React from "react";
import { GoThreeBars } from "react-icons/go";
import "./GoogleLogo.css"
import logo from '../Assets/Google-Translate-01.svg'
const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-row text-xl pl-4 my-4 pb-4 border-b-2">
        <GoThreeBars className="w-4 h-auto mr-4" />
        <h1 className="pt-0.5">
          <span>
            <span className="g-blue">U</span>
            <span className="o-red">m</span>
            <span className="o-yellow">a</span>
            <span className="g-blue">i</span>
            <span className="l-green">r</span>
          </span>
        </h1>
        <h1 className=" font-light ml-1 pt-0.5 text-[#333333]">Translate</h1>        
        <img src={logo} alt="writing of logo name"className="w-8 ml-auto mr-6" />
      </div>
    </nav>
  );
};

export default Navbar;
