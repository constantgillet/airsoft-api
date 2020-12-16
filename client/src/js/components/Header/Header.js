import React from 'react'
import './Header.scss'

export default function Header() {
    return (
        <div className="header_container">
            <div className="logo">
                <img src="/images/logo.png" className="logo_img" alt="logo_img"/>
            </div>
            <div className="link_container">
                <a href="" className="link_header text-subtitle">Documentation</a>
                <a href="" className="link_header text-subtitle">Status</a>
                <a href="" className="link_header text-subtitle">Pricing</a>
                <a href="" className="link_header text-subtitle link_blue">Contribuer</a>
            </div>
        </div>
    )
}
