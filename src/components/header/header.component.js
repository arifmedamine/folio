import React, { useState } from 'react'
import './header.styles.css'
import { Mobile } from './mobile/mobile.component'
import { Web } from './web/web.component'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="header">
            <div className="logo"> Welcome </div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)} >
                        <i class="material-icons menu-icon">apps</i>
                    </div>
                    {isOpen && <Mobile isOpen setIsOpen />}
                </div>
            </div>
        </div>
    )

}
