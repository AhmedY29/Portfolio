import React from 'react'

import Card from './Card';
import projectImg1 from "../assets/project1.jpeg"
import projectImg2 from "../assets/project2.jpeg"
import projectImg3 from "../assets/project3.jpeg"




function Projects() {
    const project = [
        {
        name: 'Real Estate - Maskn',
        desc: 'A platform for buying and renting properties, enabling marketers to showcase their listings professionally. The platform offers users a seamless browsing experience and an advanced search feature to find properties efficiently.',
        technologies: ['js','react','express','node','mui','mongo','mailtrap'],
        img:projectImg1,
        complete:true,
        link:'https://maskn.site/'
    },
        {
        name: 'To Do List',
        desc: 'A web application that helps users manage their daily tasks.',
        technologies: ['js','react','mui','local'],
        img:projectImg2,
        complete:true,
        link:'https://todo2977.netlify.app/'
    },
        {
        name: 'My Portfolio',
        desc: 'A web application for Show My work',
        technologies: ['js','react'],
        img:projectImg3,
        complete:false,
        link:'https://ahmed-alsaleh.netlify.app/'
    },
]
  return (
    <section>
        <div className="container">
        <div className="title">
            <h1>Projects🧑‍💻</h1>
        </div>
        <div className="cards">
            {
                project.map((p)=>(
                    <Card key={p.name} name={p.name} img={p.img} desc={p.desc} technology={p.technologies} complete={p.complete} link={p.link} />
                ))
            }
        </div>
        </div>
    </section>
  )
}

export default Projects