import React from 'react'
import { SkillsData } from '../../../data/skills'
import Separator from '../../common/separator/separator.component'
import SkillCard from './skill-card.component'
import './skills.styles.css'

function Skills() {
    const data = SkillsData
    return (
        <div className="skills">
            <Separator />
            <label className="section-title">SKills</label>
            <div className="skills-container" >
                {
                    data.map((item) => {
                        return (
                            <div className="skills-section">
                                <label className="skills-section-title"> {item.type} </label>
                                <div className="skills-list">
                                    {
                                        item.list.map((skill) => {
                                            return (
                                                <SkillCard skill={skill} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills
