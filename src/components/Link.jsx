import React from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

function Link({ className, link, icon }) {
  const icons = {
    mail: <MdEmail fontSize={"20px"} />,
    github: <IoLogoGithub fontSize={"20px"} />,
    linkedin: <FaLinkedin fontSize={"20px"} />,
    resume: <IoDocumentText fontSize={"20px"} />,
  };
  const classN = className.split(" ")[1];
  console.log(classN);
  return (
    <div className={className}>
      <div className="iconTitle">{classN}</div>
      <a href={link} target="_blank">
        {icon.map((i) => icons[i] || null)}
      </a>
    </div>
  );
}

export default Link;
