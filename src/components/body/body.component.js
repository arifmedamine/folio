import React from 'react'
import About from './about/about.component'
import './body.styles.css'
import Contact from './contact/contact.component'
import Project from './project/project.component'
import Skills from './skills/skills.component'
import Work from './work/work.component'

export const Body = () => {
    return <div className="body"> 
        <section id="about">
            <About />
        </section>
        <section id="project">
            <Project />
        </section>
        <section id="skills">
            <Skills />
        </section>
        <section id="work">
            <Work />
        </section>
        <section id="contact">
            <Contact />
        </section>
    </div>
}
