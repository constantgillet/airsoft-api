import React from 'react'
import './Footer.scss'
import LinkPage from '../../components/LinkPages/LinkPages'
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
                <div className="footer_elements">
                    <div className="title">{logo_white}</div>
                    <div className="underline"></div>
                    <p className="description">UpGear est une plateforme de matériel d'airsoft d'occasion. Achetez et vendez votre équipement au meilleur prix !</p>
                </div>
                <div className="footer_elements">
                    <div className="title">Pages de l'API</div>
                    <div className="underline"></div>
                    <div className="description">
                        <p><a href="https://github.com/constantgillet/airsoft-api/blob/master/documentation.md" target="_blank" rel="nofollow" className="">Documentation</a></p>
                        <p><LinkPage 
                            className=""
                            link="/status"
                            alt="Status"
                            text="Statut"
                        /></p>
                        <p><LinkPage 
                            className=" "
                            link="/pricing"
                            alt="Pricing"
                            text="Tarifs"
                        /></p>
                        <p><LinkPage 
                            className=""
                            link="/contribute"
                            alt="contribute"
                            text="Contribuer"
                        /></p>
                    </div>
                </div>
                <div className="footer_elements">
                    <div className="title">Liens utiles</div>
                    <div className="underline"></div>
                    <div className="description">
                        <p> <a href="#">Nous contacter</a></p>
                        <p> <a href="https://upgear.fr/CGU">CGU</a></p>
                        <p> <a href="#">Aide</a></p>
                        <p> <a href="https://github.com/constantgillet/airsoft-api">Github</a></p>
                    </div>
                </div>
                <div className="footer_elements">
                    <div className="title">Contact</div>
                    <div className="underline"></div>
                    <div className="description">
                        <p> <i className="fas fa-map-marker-alt mr-3"></i> Paris, France</p>
                        <p> <i className="fas fa-envelope mr-3"></i> <a href="#">contact@upgear.fr</a></p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                © 2020 Copyright: <span>upgear.fr</span>
            </div>
        </div>
    )
}
