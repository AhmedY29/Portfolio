import React from 'react'
import '../style.css'
import logo from '../assets/Graduaion-Photo.jpeg'
import Links from './Links'
import Skills from './Skills'

function MySection() {
  return (
    <section className='mySection'>
        <div className="container">
            <div className="mySection-content">
                <div className="img">
                    <img src={logo} alt="s" />
                </div>
                <div className="text">
                    <h2>Welcome,<b> I'm Ahmed Alsaleh </b>👋🏻</h2>
                    <hr />
                    <p>As a passionate and dedicated Software Engineer, I aim to leverage my expertise in full-stack development to
                        create impactful and efficient solutions. I am eager to contribute to the success of the team by collaborating
                        with innovative professionals and delivering high-quality software applications that align with modern
                        technological advancements. </p>
                </div>
            </div>
            <Links/>
            <hr />
            <Skills/>
            <hr />
        </div>
    </section>
  )
}

export default MySection