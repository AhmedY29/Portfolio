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
              As a passionate and dedicated Software Engineer, I aim to leverage
              my expertise in Web development to create impactful and efficient
              solutions. I am eager to contribute to the success of the team by
              collaborating with innovative professionals and delivering
              high-quality software applications that align with modern
              technological advancements.{" "}
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
