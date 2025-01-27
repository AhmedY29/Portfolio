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
                    <p>I have experience in application development and strong skills in dealing with different programming languages. I have a passion for solving technical problems and providing innovative solutions. I seek to join an ambitious team to contribute to the development of distinctive technical projects and achieve common goals.</p>
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