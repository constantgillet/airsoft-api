import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import LinkPage from '../../components/LinkPages/LinkPages'

export default function Header() {
    return (
        <div className="header_container container">
            <div className="logo">
                <Link to="/"><img src="/images/logo.png" className="logo_img" alt="logo_img"/></Link>
            </div>
            <div className="link_container">
                <LinkPage 
                    className="button-link-header"
                    link="/Documentation"
                    alt="Documentation"
                    text="Documentation"
                />
                <LinkPage 
                    className="button-link-header"
                    link="/StatusPage"
                    alt="statut"
                    text="Statut"
                />
                <LinkPage 
                    className="button-link-header"
                    link="/PricingPage"
                    alt="Pricing"
                    text="Pricing"
                />
                <LinkPage 
                    className="button-blue"
                    link="/Contribute"
                    alt="Contribuer"
                    text="Contribuer"
                />
            </div>
        </div>
    )
}
