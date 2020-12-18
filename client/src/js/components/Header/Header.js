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
                <a href="https://github.com/constantgillet/airsoft-api/blob/master/documentation.md" target="_blank" rel="nofollow" className="button-link-header">Documentation</a>
                <LinkPage 
                    className="button-link-header"
                    link="/status"
                    alt="statut"
                    text="Statut"
                />
                <LinkPage 
                    className="button-link-header"
                    link="/pricing"
                    alt="Pricing"
                    text="Tarifs"
                />
                <LinkPage 
                    className="button-blue"
                    link="/contribute"
                    alt="Contribuer"
                    text="Contribuer"
                />
            </div>
        </div>
    )
}
