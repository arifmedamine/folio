import React from 'react'
import './skill-card.styles.css'

function SkillCard( {skill} ) {
    return (
        <div className="skill-card" >
            <div className="skill-icon" > {skill.icon} </div>
            <label className="skill-name"> {skill.name} </label>
        </div>
    )
}

export default SkillCard
