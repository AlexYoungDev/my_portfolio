// import {BsFillMoonStarsFill} from "react-icons/bs";
// import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai"
// import { useState } from "react";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className="bg-amber-100">
      <Navbar/>
      <Hero/>
      <Projects/>
    </div>
  )
}              

// Bug
// 1 : text-center
// 2 : layout=responsive
// 3 : useState

// Navbar
// Hero
// Mystory
// Skills
// Projects
// Contact
// Footer