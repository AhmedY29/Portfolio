import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiMailtrap } from "react-icons/si";
import { MdOutlineStorage } from "react-icons/md";



function Card({name , img , desc , technology , complete , link}) {
    console.log(technology)
    const icons = {
        js: <IoLogoJavascript color="yellow" className="logos" />,
        react: <FaReact color="lightblue" className="logos" />,
        mongo: <SiMongodb color="green" className="logos" />,
        node: <FaNodeJs color="green" className="logos" />,
        express: <SiExpress color="white" className="logos" />,
        mui: <SiMui color="blue" className="logos" />,
        mailtrap: <SiMailtrap color="white" className="logos" />,
        local: <MdOutlineStorage color="white" className="logos" />,
      };
  return (
    <div className="card">
    <div className="img">
        <img src={img} alt="" />
    </div>
    <div className="title-card">
        <a href={link} target='_blank'><h4>{name}</h4></a>
        <p className={complete ? 'complete' : 'in-Progress'}>{
            complete ? 'complete' : 'in Progress'
        }</p>
    </div>
    <hr />
    <div className="technologies">
    {technology.map((t) => icons[t] || null)}
    </div>
    <div className="description">
        <p>{desc}</p>
    </div>
    
</div>
  )
}

export default Card