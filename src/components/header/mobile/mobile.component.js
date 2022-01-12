import React from 'react';
import './mobile.styles.css'

export const Mobile = ({ isOpen, setIsOpen }) => {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                <i class="material-icons">
                    cancel
                </i>
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                    <a href="#project">
                        <i class="material-icons option-icon">wysiwyg</i>Projects
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#skills" >
                        <i class="material-icons option-icon">settings_ethernet</i>Skills
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#work">
                        <i class="material-icons option-icon">work</i>Work
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#contact">
                        <i class="material-icons option-icon">contacts</i>Contact
                    </a>
                </div>
            </div>
        </div>
    )
}