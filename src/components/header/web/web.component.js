import React from 'react'
import './web.styles.css'

export const Web = () => {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#project">
                    <i class="material-icons option-icon">wysiwyg</i>Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills" >
                    <i class="material-icons option-icon">settings_ethernet</i>Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                    <i class="material-icons option-icon">work</i>Work
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                    <i class="material-icons option-icon">contacts</i>Contact
                </a>
            </div>
        </div>
    )
}