import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import Resume from "../assets/Ahmed Alsaleh - CV.pdf";
import Link from "./Link";

function Links() {
  return (
    <>
      <div className="location">
        <IoLocationOutline fontSize={"20px"} />
        <p>Saudi Arabia - Alahsa</p>
      </div>
      <div className="links">
        <Link
          className={"link email"}
          link={"mailto:alsalehahmed02@gmail.com"}
          icon={["mail"]}
        />
        <Link
          className={"link github"}
          link={"https://github.com/AhmedY29"}
          icon={["github"]}
        />
        <Link
          className={"link linkedin"}
          link={"https://www.linkedin.com/in/ahmed-y-alsaleh/"}
          icon={["linkedin"]}
        />
        <Link className={"link resume"} link={Resume} icon={["resume"]} />
      </div>
    </>
  );
}

export default Links;
