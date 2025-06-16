import React, { useEffect, useRef } from "react";

import Card from "./Card";
import projectImg1 from "../assets/project1.jpeg";

// To do list IMG
// import projectImg2 from "../assets/project2.jpeg";

import projectImg2 from "../assets/project2.png";
import projectImg3 from "../assets/project3.jpeg";
import projectImg4 from "../assets/project4.png";
import projectImg5 from "../assets/project5.png";
import projectImg6 from "../assets/project6.png";
import projectImg7 from "../assets/project7.png";
import projectImg8 from "../assets/project8.png";
import projectImg9 from "../assets/project9.png";
import projectImg10 from "../assets/project10.png";
import projectImg11 from "../assets/project11.png";
import projectImg12 from "../assets/project12.png";
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
      name: "Modar",
      desc: `Graduation project management web app designed for university students, supervisors, and admins.
It allows students to submit their project ideas, track approval status (Pending / Approved / Rejected), view their assigned supervisor, and collaborate with team members — all through a modern, responsive, and animated interface.

The app uses Redux for state management, i18n for multilingual support, React Router for navigation, Tailwind CSS for fast and clean styling, and AOS for smooth scroll animations.`,
      technologies: [
        "js",
        "react",
        "tailwind",
        "redux",
        "i18next",
        "darkmode",
        "chart",
      ],
      img: projectImg2,
      complete: false,
      link: "https://modar.onrender.com/",
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
    {
      name: "Steven Fry Blog - Redesign",
      desc: " redesign for Steven Fry Blog, improving its layout, visuals, and user experience. Additionally, I fixed various issues to ensure smoother navigation, faster loading, and better functionality. The site now looks more modern and works seamlessly across devices.",
      technologies: ["html", "css"],
      img: projectImg7,
      complete: true,
      link: "https://aabalqahtani.github.io/w2-flex-project/index.html",
    },
    {
      name: "Geeks - Clone",
      desc: "This is a clone of Geeks, recreated using HTML,CSS. The goal was to practice front-end development by replicating the original design and functionality without modifications. This project is for educational purposes only.",
      technologies: ["html", "css", "bootstrap"],
      img: projectImg8,
      complete: true,
      link: "https://ahmedy29.github.io/Geeks-Clone-HW/",
    },
    {
      name: "Tuwaiq - Clone",
      desc: "This is a clone of Tuwaiq, meticulously recreated with HTML,CSS and Bootstrap. While retaining the original design, I identified and fixed several UI/functional issues.This demonstrates both replication skills and problem-solving in front-end development",
      technologies: ["html", "css", "bootstrap"],
      img: projectImg9,
      complete: true,
      link: "https://ahmedy29.github.io/Tuwaiq-Clone/",
    },
    {
      name: "Youtube - Clone",
      desc: "This is a clone of Youtube, meticulously recreated with React and Tailwind. While retaining the original design, I identified and fixed several UI/functional issues.This demonstrates both replication skills and problem-solving in front-end development",
      technologies: ["react", "js", "tailwind"],
      img: projectImg10,
      complete: true,
      link: "https://youtube-clone-kfni.onrender.com/",
    },
    {
      name: "Activision - Clone",
      desc: "This is a clone of Activision, meticulously recreated with React and Tailwind. While retaining the original design, I identified and fixed several UI/functional issues.This demonstrates both replication skills and problem-solving in front-end development",
      technologies: ["react", "js", "tailwind"],
      img: projectImg11,
      complete: true,
      link: "https://activision-clone-ahmed.netlify.app/",
    },
    {
      name: "Riyadh season - Clone",
      desc: "This is a clone of Tuwaiq, meticulously recreated with React and Tailwind. While retaining the original design, I identified and fixed several UI/functional issues.This demonstrates both replication skills and problem-solving in front-end development",
      technologies: ["react", "js", "tailwind"],
      img: projectImg12,
      complete: true,
      link: "https://riyadh-season-reacthw.netlify.app/",
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
