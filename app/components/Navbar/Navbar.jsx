import React from "react";
import "./Navbar.css";
import Image from "next/image";
import ramen from "../../../public/ramen3.png";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="title">
          <Image src={ramen} className="h-10 w-10" alt="konoha" />
          <span>My Portfolio</span>
        </div>
        <ul>
          <li>
            <a className="button1" href="">
              Home
            </a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Pojects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
