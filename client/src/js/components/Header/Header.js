import React from 'react'
import './Header.scss'

export default function Header() {
    return (
        <div className="header_container">
            <div className="logo">
                <img src="/images/logo.png" className="logo_img" alt="logo_img"/>
            </div>
            <div className="link_container">
                <a href="" className="link_header">Documentation</a>
                <a href="" className="link_header">Status</a>
                <a href="" className="link_header">Pricing</a>
                <a href="" className="link_header link_blue">Contribuer</a>
            </div>
        </div>
    )
}
