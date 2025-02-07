import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import Resume from '../assets/Ahmed Alsaleh - CV.pdf'

function Links() {
  return (
    <>
        <div className="location">
            <IoLocationOutline fontSize={'20px'}/>
            <p>Saudi Arabia - Alahsa</p>
        </div>
        <div className="links">

        <div className="email">
            <a href='mailto:alsalehahmed02@gmail.com'>
            <MdEmail fontSize={'20px'}/>
            </a>
        </div>
        <div className="github">
        <a href='https://github.com/AhmedY29' target='_blank'>
            <IoLogoGithub fontSize={'20px'}/>
            </a>
        </div>
        <div className="linkedin">
        <a href='https://www.linkedin.com/in/ahmed-y-alsaleh/' target='_blank'>
            <FaLinkedin fontSize={'20px'}/>
            </a>
        </div>
        {/* <div className="telephone">
        <a href='0501108382'>
            <BsFillTelephoneFill fontSize={'20px'}/>
            </a>
        </div> */}
        <div className="resume">
        <a href={Resume} target='_blank'>
            <IoDocumentText fontSize={'20px'}/>
            </a>
        </div>
        </div>
    </>
  )
}

export default Links