import React from 'react'
import Header from '../../components/Header/Header'
import LinkPage from '../../components/LinkPages/LinkPages'
import Footer from '../../components/Footer/Footer'
import PricingCards from '../../components/PricingCards/PricingCards'
import './DocumentationPage.scss'

export default function DocumentationPage() {
    return (
        <div className="home-page">
            <div className="header">
                <Header/>
            </div>

            <div className="background-title-image">
                <h1>Documentation</h1>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}