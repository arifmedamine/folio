import React from 'react'
import { ProjectsData } from '../../../data/projects'
import Separator from '../../common/separator/separator.component'
import ProjectCard from './project-card.component'
import './project.styles.css'

function Project() {
    const data = ProjectsData
    return (
        <div className="projects">
            <Separator />
            <label className="section-title">Projects</label>
            <div>
                {
                    data.map((project) => {
                        return <ProjectCard project={project} />
                    })
                }
            </div>
        </div>
    )
}

export default Project
