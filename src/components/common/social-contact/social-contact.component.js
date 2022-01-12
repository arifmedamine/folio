import React from 'react'
import { SocialData } from '../../../data/social'
import './social-contact.styles.css'
function SocialContact() {
    const data = SocialData
    return (
        <div className="social-contact" >
            {
                data.map((item) => {
                    return (
                        <a target="_blank" rel="noopener noreferrer" href={item.link}>
                            <div className="social-icon-div" >
                                <img src={item.icon} className="social-icon"  />
                            </div>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default SocialContact
