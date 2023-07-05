import React from "react";
import "./Hero.css";
import Image from "next/image";
import me from "../public/avatar.png";

const Hero = () => {
  return (
    <section className="container">
      <div className="firstdiv">
        <div className="seconddiv">
          <h1 className="title">
            Hey There, I'm Alexandre.
            <span class="sm:block"> Young developer.</span>
          </h1>
          <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            I design beautiful simple things, And I love what I do
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4"></div>
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
