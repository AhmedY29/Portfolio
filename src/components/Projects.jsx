import React, { useEffect, useRef } from "react";

import Card from "./Card";
import projectImg1 from "../assets/project1.jpeg";
import projectImg2 from "../assets/project2.jpeg";
import projectImg3 from "../assets/project3.jpeg";
import projectImg4 from "../assets/project4.png";
import projectImg5 from "../assets/project5.png";
import projectImg6 from "../assets/project6.png";
import gsap from "gsap";

function Projects() {
  const prgRef = useRef(null);
  const cardRef = useRef([]);
  useEffect(() => {
    gsap.from(prgRef.current, {
      opacity: 0,
    });
    gsap.to(prgRef.current, {
      opacity: 1,
      y: -10,
      duration: 3,
    });
  }, []);

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      stagger: 0.5,
    });
    gsap.to(cardRef.current, {
      opacity: 1,
      y: -20,
      duration: 1,
      stagger: 0.5,
    });
  }, []);
  const project = [
    {
      name: "Real Estate - Maskn",
      desc: "A platform for buying and renting properties, enabling marketers to showcase their listings professionally. The platform offers users a seamless browsing experience and an advanced search feature to find properties efficiently.",
      technologies: [
        "js",
        "react",
        "express",
        "node",
        "mui",
        "mongo",
        "mailtrap",
      ],
      img: projectImg1,
      complete: true,
      link: "https://maskn.site/",
    },
    {
      name: "To Do List",
      desc: "A web application that helps users manage their daily tasks.",
      technologies: ["js", "react", "mui", "local"],
      img: projectImg2,
      complete: true,
      link: "https://todo2977.netlify.app/",
    },
    {
      name: "My Portfolio",
      desc: "My personal website showcases my skills as a software developer, previous projects, and the technologies I specialize in.",
      technologies: ["js", "react", "gsap"],
      img: projectImg3,
      complete: false,
      link: "https://ahmed-alsaleh.netlify.app/",
    },
    {
      name: "Travel Planner",
      desc: "A web application designed to help users plan their trips. The website offers features such as creating customized travel itineraries, exploring popular destinations, and accessing trip details, integrated with Gemini, Build your plan by Asking some questions.",
      technologies: ["js", "react", "gemini", "i18next", "gsap"],
      img: projectImg4,
      complete: false,
      link: "https://travel-plan1.netlify.app/",
    },
    {
      name: "Landing Page - 1",
      desc: "Convert Design from Figma to Website with AOS animation",
      technologies: ["html", "css"],
      img: projectImg5,
      complete: true,
      link: "https://ahmedy29.github.io/Landing-1/",
    },
    {
      name: "Landing Page - 2",
      desc: "Convert Design from Figma to Website with animation",
      technologies: ["html", "css"],
      img: projectImg6,
      complete: true,
      link: "https://ahmedy29.github.io/Landing-2/",
    },
  ];
  return (
    <section ref={prgRef}>
      <div className="container">
        <div className="title">
          <h1>Projects🧑‍💻</h1>
        </div>
        <div className="cards">
          {project.map((p, index) => (
            <Card
              ref={(el) => (cardRef.current[index] = el)}
              key={p.name}
              name={p.name}
              img={p.img}
              desc={p.desc}
              technology={p.technologies}
              complete={p.complete}
              link={p.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
