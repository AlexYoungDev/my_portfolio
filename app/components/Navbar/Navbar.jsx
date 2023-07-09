import React from "react";
import "./Navbar.css";
import Image from "next/image";
import yingyang from "../../../public/ying_yang.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <Image src={yingyang} className="ying" alt="ying_yang" />
        <span className="myportfolio">My Portfolio</span>
      </div>
      <div className="divmenu">
        <ul className="menu">
          <li>
            <a className="button1" href="">
              Home
            </a>
          </li>
          <li>
            <a className="button2" href="">
              About
            </a>
          </li>
          <li>
            <a className="button3" href="">
              Pojects
            </a>
          </li>
          <li>
            <a className="button4" href="">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
