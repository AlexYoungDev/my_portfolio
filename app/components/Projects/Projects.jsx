import React from "react";
import Image from "next/image";
import web1 from "../../../public/pokeastro1.png";
import web2 from "../../../public/reseau_social2.png";
import web3 from "../../../public/p5_e-commerce_1.png";
import web4 from "../../../public/insta_almaauch3.png";
import web5 from "../../../public/web5.png";
import web6 from "../../../public/web6.png";

const Projects = () => {
  // if (!Projects.length) return null;
  //   Cela vérifie si la variable projects est vide. Si c'est le cas, le composant retourne null et n'affiche pas le contenu suivant.
  return (
    <div>
      <div>
        <h3 className="text-3xl py-1">My Projects</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          placeat fugiat debitis iure, praesentium illum. Architecto, laboriosam
          aliquam molestias placeat ipsam animi est aspernatur reprehenderit
          recusandae? Est labore a provident?
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <Image
            src={web1}
            className="rounded-lg object-lg"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web2}
            className="rounded-lg object-lg"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web3}
            className="rounded-lg object-lg"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web4}
            className="rounded-lg object-lg"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web5}
            className="rounded-lg object-lg"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web6}
            className="rounded-lg object-lg"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
