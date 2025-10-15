import React, { useEffect, useRef, useState } from "react";

import Card from "./Card";
import projectImg1 from "../assets/project1.jpeg";

// To do list IMG
// import projectImg2 from "../assets/project2.jpeg";

import projectImg2 from "../assets/project2.png";
import projectImg3 from "../assets/project3.jpeg";
import projectImg4 from "../assets/project4.png";
import projectImg5 from "../assets/project5.png";
import projectImg7 from "../assets/project7.png";
import projectImg8 from "../assets/project8.png";
import projectImg9 from "../assets/project9.png";
import projectImg10 from "../assets/project10.png";
import projectImg11 from "../assets/project11.png";
import projectImg12 from "../assets/project12.png";
import projectImg13 from "../assets/project13.png";
import backendImg from "../assets/backend-img.png";
import gsap from "gsap";

function Projects() {
  const prgRef = useRef(null);
  const cardRef = useRef([]);
  const [filter, setFilter] = useState('all')
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
      // y: -20,
      duration: 1,
      stagger: 0.5,
    });
  }, []);
  const project = [
    {
      name: "Bus Line",
      desc: "A smart and secure solution for school transportation, especially designed for students facing difficulties accessing schools or universities. The platform offers real-time tracking of buses and a reliable communication system between drivers and students to ensure safe and efficient transport.",
      technologies: [
        "js",
        "react",
        "express",
        "node",
        "mongo",
        "socket",
        "tailwind",
        "shadcn",
        "mapbox",
      ],
      categories: ["fullstack", "frontend", "backend"],
      img: projectImg13,
      complete: true,
      link: "https://bus-line.onrender.com/",
    },
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
      categories: ["fullstack", "frontend", "backend"],
      img: projectImg1,
      complete: true,
      link: "https://mskan.onrender.com/",
    },
    {
      name: "Modar",
      desc: `Graduation project management web app designed for university students, supervisors, and admins.
It allows students to submit their project ideas, track approval status (Pending / Approved / Rejected), view their assigned supervisor, and collaborate with team members — all through a modern, responsive, and animated interface.

The app uses Mock Api and Redux for state management, i18n for multilingual support, React Router for navigation, Tailwind CSS for fast and clean styling, and AOS for smooth scroll animations.`,
      technologies: [
        "js",
        "react",
        "tailwind",
        "redux",
        "i18next",
        "darkmode",
        "chart",
      ],
      categories: ["frontend"],
      img: projectImg2,
      complete: false,
      link: "https://modar.onrender.com/",
    },
    {
      name: "My Portfolio",
      desc: "My personal website showcases my skills as a software developer, previous projects, and the technologies I specialize in.",
      technologies: ["js", "react", "gsap"],
      categories: ["fullstack", "frontend", "backend"],
      img: projectImg3,
      complete: false,
      link: "https://ahmed-alsaleh.netlify.app/",
    },
    {
      name: "Travel Planner",
      desc: "A web application designed to help users plan their trips. The website offers features such as creating customized travel itineraries, exploring popular destinations, and accessing trip details, integrated with Gemini, Build your plan by Asking some questions using Gemini Api.",
      technologies: ["js", "react", "gemini", "i18next", "gsap"],
      categories: ["frontend"],
      img: projectImg4,
      complete: false,
      link: "https://travel-plan1.netlify.app/",
    },
    {
      name: "Landing Page - 1",
      desc: "Convert Design from Figma to Website with AOS animation",
      technologies: ["html", "css"],
      categories: ["frontend"],
      img: projectImg5,
      complete: true,
      link: "https://ahmedy29.github.io/Landing-1/",
    },

    {
      name: "Steven Fry Blog - Redesign",
      desc: " redesign for Steven Fry Blog, improving its layout, visuals, and user experience. Additionally, I fixed various issues to ensure smoother navigation, faster loading, and better functionality. The site now looks more modern and works seamlessly across devices.",
      technologies: ["html", "css"],
      categories: ["frontend"],
      img: projectImg7,
      complete: true,
      link: "https://aabalqahtani.github.io/w2-flex-project/index.html",
    },
    {
      name: "Geeks - Clone",
      desc: "This is a clone of Geeks, recreated using HTML,CSS. The goal was to practice front-end development by replicating the original design and functionality without modifications. This project is for educational purposes only.",
      technologies: ["html", "css", "bootstrap"],
      categories: ["frontend"],
      img: projectImg8,
      complete: true,
      link: "https://ahmedy29.github.io/Geeks-Clone-HW/",
    },
    {
      name: "Tuwaiq - Clone",
      desc: "This is a clone of Tuwaiq, meticulously recreated with HTML,CSS and Bootstrap. While retaining the original design, I identified and fixed several UI/functional issues.This demonstrates both replication skills and problem-solving in front-end development",
      technologies: ["html", "css", "bootstrap"],
      categories: ["frontend"],
      img: projectImg9,
      complete: true,
      link: "https://ahmedy29.github.io/Tuwaiq-Clone/",
    },
    {
      name: "Youtube - Clone",
      desc: "This is a clone of Youtube, meticulously recreated with React and Tailwind. While retaining the original design, I identified and fixed several UI/functional issues.This demonstrates both replication skills and problem-solving in front-end development",
      technologies: ["react", "js", "tailwind"],
      categories: ["frontend"],
      img: projectImg10,
      complete: true,
      link: "https://youtube-clone-kfni.onrender.com/",
    },
    {
      name: "Activision - Clone",
      desc: "This is a clone of Activision, meticulously recreated with React and Tailwind. While retaining the original design, I identified and fixed several UI/functional issues.This demonstrates both replication skills and problem-solving in front-end development",
      technologies: ["react", "js", "tailwind"],
      categories: ["frontend"],
      img: projectImg11,
      complete: true,
      link: "https://activision-clone-ahmed.netlify.app/",
    },
    {
      name: "Riyadh season - Clone",
      desc: "This is a clone of Riyadh season, meticulously recreated with React and Tailwind. While retaining the original design, I identified and fixed several UI/functional issues.This demonstrates both replication skills and problem-solving in front-end development",
      technologies: ["react", "js", "tailwind"],
      categories: ["frontend"],
      img: projectImg12,
      complete: true,
      link: "https://riyadh-season-reacthw.netlify.app/",
    },
    {
      name: "Car Dealer - API",
      desc: "A RESTful API for managing car dealerships, car manufacturers, and vehicle inventory built with Node.js, Express, TypeScript, and MongoDB.",
      technologies: ["express", "node", "mongo"],
      categories: ["backend"],
      img: backendImg,
      complete: true,
      link: "https://github.com/AhmedY29/express-carDealer-mongo",
    },
    {
      name: "Attendance Management System - API",
      desc: "A full-featured attendance system built with Express.js and MongoDB. It helps educational institutions manage student and teacher attendance, and leave requests efficiently.",
      technologies: ["express", "node", "mongo"],
      categories: ["backend"],
      img: backendImg,
      complete: true,
      link: "https://github.com/AhmedY29/Attendance-System-Express",
    },
    {
      name: "Subscription Tracker - API",
      desc: "A comprehensive RESTful API for managing subscriptions with user authentication, email notifications, and advanced security features built with Node.js, Express, TypeScript, and MongoDB.",
      technologies: ["express", "node", "mongo"],
      categories: ["backend"],
      img: backendImg,
      complete: true,
      link: "https://github.com/AhmedY29/Subscription-Tracker-Backend",
    },
  ];
  return (
    <section ref={prgRef}>
      <div className="container">
        <div className="title">
          <h1>Projects🧑‍💻</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }} className="filter">
          <button style={{ backgroundColor: filter == "all" ? "#333" : "#fff", color: filter == "all" ? "#fff" : "#333", border: "1px solid #333" , transition: "0.4s", cursor: "pointer", padding: "10px 15px", borderRadius: "8px", borderTopRightRadius: "0px", borderBottomRightRadius: "0px"}} onClick={() => setFilter('all')}>All</button>
          <button style={{ backgroundColor: filter == "frontend" ? "#333" : "#fff", color: filter == "frontend" ? "#fff" : "#333", border: "1px solid #333" , transition: "0.4s", cursor: "pointer", padding: "10px 15px"}} onClick={() => setFilter("frontend")}>Front End</button>
          <button style={{ backgroundColor: filter == "backend" ? "#333" : "#fff", color: filter == "backend" ? "#fff" : "#333", border: "1px solid #333" , transition: "0.4s", cursor: "pointer", padding: "10px 15px", borderRadius: "8px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px"}} onClick={() => setFilter("backend")}>Back End</button>
        </div>
        <div className="cards">
          {project.filter((p) => filter != 'all' ? p.categories.includes(filter) : true).map((p, index) => (
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
