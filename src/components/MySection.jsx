import React, { useEffect, useRef } from "react";
import "../style.css";
import logo from "../assets/Graduaion-Photo.jpeg";
import Links from "./Links";
import Skills from "./Skills";
import gsap from "gsap";

function MySection() {
  const secRef = useRef();
  useEffect(() => {
    gsap.from(secRef.current, {
      opacity: 0,
    });
    gsap.to(secRef.current, {
      opacity: 1,
      x: -10,
      duration: 1.3,
    });
  }, []);
  return (
    <section ref={secRef} className="mySection">
      <div className="container">
        <div className="mySection-content">
          <div className="img">
            <img src={logo} alt="s" />
          </div>
          <div className="text">
            <h2>
              Welcome,<b> I'm Ahmed Alsaleh </b>👋🏻
            </h2>
            <hr />
            <p>
              Innovative Software Engineer specializing in web development, with
              hands-on experience building scalable, multilingual applications
              using Next.js, React.js, Node.js, MongoDB, and Supabase.
              Proficient in implementing internationalization with i18next, and
              highly skilled in problem-solving, effective communication, and
              team collaboration. Experienced in translating Figma designs into
              responsive web applications. Eager to contribute technical
              expertise and a collaborative mindset to a dynamic team,
              delivering high-performance, user-focused web solutions aligned
              with business goals.
            </p>
          </div>
        </div>
        <Links />
        <hr />
        <Skills />
        <hr />
      </div>
    </section>
  );
}

export default MySection;
