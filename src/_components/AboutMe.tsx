'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                {/* <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I believe in a user centered design approach, ensuring that
                    every project I work on is tailored to meet the specific
                    needs of its users.
                </h2> */}

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Ahmed.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                {/* I'm a full-stack developer passionate about
                                building innovative solutions that solve real-world
                                problems. I specialize in creating scalable,
                                multilingual web applications with seamless user
                                experiences. */}

                                I'm full-stack developer passionate
                                about building innovative solutions that solve
                                real-world problems. Recognized as Best Capstone
                                Project and Student of the Week at Tuwaiq
                                Bootcamp, I specialize in creating scalable,
                                multilingual web applications with seamless user
                                experiences.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                My approach focuses on combining modern technologies
                                like React.js, Next.js, and Node.js to deliver
                                high-performance solutions. From real-time tracking
                                systems to AI-powered platforms, I build applications
                                that prioritize user experience, scalability, and
                                technical excellence. With 1000+ problem-solving
                                points, I bring both creativity and
                                analytical thinking to every project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
