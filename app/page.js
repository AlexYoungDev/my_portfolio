import Head from "next/head";
// import {BsFillMoonStarsFill} from "react-icons/bs";
// import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai"
import Image from "next/image";
import deved from "../public/avatar.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
// import web1 from "../public/pokeastro1.png";
// import web2 from "../public/reseau_social2.png";
// import web3 from "../public/p5_e-commerce_1.png";
// import web4 from "../public/insta_almaauch3.png";
// import web5 from "../public/web5.png";
// import web6 from "../public/web6.png";
// import { useState } from "react";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

export default function Home() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="bg-amber-100">
      <Navbar/>
      <Hero/>
      {/* className={darkMode ? "dark" : "" */}
      <main className="bg-white px-10 md:px-20 lg:px40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            {/* <h1 className="text-xl font-burtons">Developer</h1> */}
            <ul className="flex items-center">
              <li>
                {/* <BsFillMoonStarsFill className="cursor-pointer text-2xl"/> */}
                {/* onClick={() => setDarkMode(!darkMode)}  */}
              </li>
              <li>
                {/* <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a> */}
              </li>
            </ul>

          </nav>
          {/* <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-medium md:text-6xl font-burtons">Alexandre</h2>
            <h3 className="text-2xl py-2 md:text-3xl font-burtons">Young Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-lg max-w-xl mx-auto">Young and passionate web developer, I am ready to create outstanding online experiences with my technical expertise and boundless creativity. Ready to tackle any challenge to make your business shine on the web!</p> 
          </div> */}

          {/* <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillYoutube/>
          </div> */}

          {/* <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-2 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover"/>
          <Image src={deved} alt="logo" fill style={{objectFit:"cover"}}/>
          </div> */}
        </section>
        
        <section>
            <div>
              <h3 className="text-3xl py-1">My school</h3>
              <p className="text-md py-2 leading-8 text-gray-800">Exciting projects completed collaboratively with my classmates, following a two-week sprint using the agile methodology. This involved regular activities such as stand-up meetings, retrospectives, unit testing, and demonstrations.</p>
            </div>

            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={design} width= {100} height= {100}/>
                <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
                <p className="py-2">Creating elegant designs.</p>
                <h4 py-4 text-teal-600>Tools I use</h4>
                <p className="text-gray-800 py-1">JavaScript</p>
                <p className="text-gray-800 py-1">React</p>
                <p className="text-gray-800 py-1">Node.js</p>
                <p className="text-gray-800 py-1">Git</p>
                <p className="text-gray-800 py-1">Tailwind</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={code} width= {100} height= {100}/>
                <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
                <p className="py-2">Creating elegant designs.</p>
                <h4 py-4 text-teal-600>Tools I use</h4>
                <p className="text-gray-800 py-1">JavaScript</p>
                <p className="text-gray-800 py-1">React</p>
                <p className="text-gray-800 py-1">Node.js</p>
                <p className="text-gray-800 py-1">Git</p>
                <p className="text-gray-800 py-1">Tailwind</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={consulting} width= {100} height= {100}/>
                <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
                <p className="py-2">Creating elegant designs.</p>
                <h4 py-4 text-teal-600>Tools I use</h4>
                <p className="text-gray-800 py-1">JavaScript</p>
                <p className="text-gray-800 py-1">React</p>
                <p className="text-gray-800 py-1">Node.js</p>
                <p className="text-gray-800 py-1">Git</p>
                <p className="text-gray-800 py-1">Tailwind</p>
              </div>
            </div>
        </section>

        {/* <section>
          <div>
            <h3 className="text-3xl py-1">My Projects</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat fugiat debitis iure, praesentium illum. Architecto, laboriosam aliquam molestias placeat ipsam animi est aspernatur reprehenderit recusandae? Est labore a provident?</p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-lg" width={"100%"} height={"100%"} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-lg" width={"100%"} height={"100%"} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-lg" width={"100%"} height={"100%"} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-lg" width={"100%"} height={"100%"} layout="responsive"/>
            </div> 
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-lg" width={"100%"} height={"100%"} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-lg" width={"100%"} height={"100%"} layout="responsive"/>
            </div>
          </div>
        </section> */}
      </main>
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
// Bio
// Technos
// Projects
// Contact
// Footer