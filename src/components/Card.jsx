import React, { forwardRef, useEffect, useRef } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiMailtrap } from "react-icons/si";
import { MdOutlineStorage } from "react-icons/md";
import { RiGeminiFill } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { CgDarkMode } from "react-icons/cg";
import { FaChartPie } from "react-icons/fa";
import { SiMapbox } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";

import svgGsap from "../assets/gsap.svg";
import gsap from "gsap";

const Card = forwardRef(
  ({ name, img, desc, technology, complete, link }, ref) => {
    console.log(technology);
    const icons = {
      html: <FaHtml5 color="orange" className="logos" />,
      css: <FaCss3Alt color="blue" className="logos" />,
      js: <IoLogoJavascript color="yellow" className="logos" />,
      react: <FaReact color="lightblue" className="logos" />,
      mongo: <SiMongodb color="green" className="logos" />,
      node: <FaNodeJs color="green" className="logos" />,
      express: <SiExpress color="white" className="logos" />,
      mui: <SiMui color="blue" className="logos" />,
      mailtrap: <SiMailtrap color="white" className="logos" />,
      local: <MdOutlineStorage color="white" className="logos" />,
      gemini: <RiGeminiFill color="darkblue" className="logos" />,
      i18next: <IoLanguage color="white" className="logos" />,
      bootstrap: <FaBootstrap color="purple" className="logos" />,
      tailwind: <SiTailwindcss color="lightblue" className="logos" />,
      redux: <TbBrandRedux color="purple" className="logos" />,
      darkmode: <CgDarkMode color="white" className="logos" />,
      chart: <FaChartPie color="white" className="logos" />,
      mapbox: <SiMapbox color="white" className="logos" />,
      shadcn: <SiShadcnui color="white" className="logos" />,
      gsap: <img className="logos" width={20} src={svgGsap} alt="gsap logo" />,
    };

    return (
      <div ref={ref} className="card">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="title-card">
          <a href={link} target="_blank">
            <h4>{name}</h4>
          </a>
          <p className={complete ? "complete" : "in-Progress"}>
            {complete ? "complete" : "in Progress"}
          </p>
        </div>
        <hr />
        <div className="technologies">
          {technology.map((t) => icons[t] || null)}
        </div>
        <div className="description">
          <p>{desc}</p>
        </div>
      </div>
    );
  }
);

export default Card;
