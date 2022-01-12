import React from 'react'
import SocialContact from '../../common/social-contact/social-contact.component'
import './about.styles.css'
function About() {
    return (
        <div className="about">
            <div className="about-top" >
                <div className="about-info">
                    Hello there , I am <br /> <span className="info-name">Amine Arif</span>.
                    <br />Sit tight and enjoy a little story
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/coding.png')} className="picture" />
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About
