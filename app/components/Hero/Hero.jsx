import React from "react";
import "./Hero.css";
import Image from "next/image";
import me from "../../../public/avatartwo.png";

const Hero = () => {
  return (
    <section className="container">
      <div className="firstdiv">
        <div className="seconddiv">
          <div className="smalltitle">Hey There, I'm</div>
          <h1 className="title">
            Alexandre. Young developer.
            {/* <span className="secondtitle"> Young developer.</span> */}
          </h1>
          <p className="description">
            I design beautiful simple things, And I love what I do.
          </p>
        </div>
        <div>
          <Image src={me} className="picture" alt="avatar" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Picture + Background
// Hey there, I'm Alexandre
// Young developer
// I design beautiful simple things, And I love what I do

// github
// linkedin
