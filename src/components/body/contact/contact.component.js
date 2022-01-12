import React from 'react'
import Separator from '../../common/separator/separator.component'
import SocialContact from '../../common/social-contact/social-contact.component'
import './contact.styles.css'

function Contact() {
    return (
        <div className="contact" >
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact*container" >
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on any of the platform</p>
                    <SocialContact />
                </div>
                <div className="download" >
                    <a download href={require('../../../assets/resume.pdf')} >
                        <i class="material-icons">cloud_download</i>
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
