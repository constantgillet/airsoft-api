import React from 'react'
import FooterElements from '../../components/Footer/FooterElements/FooterElements'
import './Footer.scss'
const logo_white = <img src="/images/logo_white.png" alt="logo_white"></img>

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-social-container">
                <div className="footer-social container">
                    <div className="social-description text-subtitle">Suivez nous sur les réseaux sociaux!</div>
                    <div className="media-container">
                        {/* Facebook */}
                        <a href="" className="link-header"><i className="fab fa-facebook-f"></i></a>
                        {/* Twitter */}
                        <a href="" className="link-header"><i className="fab fa-twitter"></i></a>
                        {/* Linkedin */}
                        <a href="" className="link-header"><i className="fab fa-linkedin-in"></i></a>
                        {/* Instagram */}
                        <a href="" className="link-header"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-content container">
                <FooterElements title={logo_white} description="UpGear est une plateforme de matériel d'airsoft d'occasion. Achetez et vendez votre équipement au meilleur prix !" />
                <FooterElements title="Catégories" description="ouiOUIOUIOUOIUOIUOI" />
                <FooterElements title="Liens utiles" description="ouiOUIOUIOUOIUOIUOI" />
                <FooterElements title="Contacts" description="ouiOUIOUIOUOIUOIUOI" />
                
            </div>
            <div className="copyright">
                © 2020 Copyright: <span>upgear.fr</span>
            </div>
        </div>
    )
}
