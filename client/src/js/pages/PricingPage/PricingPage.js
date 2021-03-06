import React from 'react'
import Header from '../../components/Header/Header'
import LinkPage from '../../components/LinkPages/LinkPages'
import Footer from '../../components/Footer/Footer'
import PricingCards from '../../components/PricingCards/PricingCards'
import './PricingPage.scss'

export default function PricingPage() {
    return (
        <div className="home-page">
            <div className="header">
                <Header/>
            </div>

            <div className="background-title-image">
                <h1>Pricing</h1>
            </div>

            <div className="pricing-main-container margin-top container">
                <h2 className="pricing-title">
                    <div className="pricing-line"></div>
                    Tarifs et plans
                </h2>
                <div className="pricing-cards-2">
                    <PricingCards
                        className="pricing-card-container-2 blue"
                        title="Programme de contribution"
                        subtitle="Contribuez pour profiter de l'ensemble des fonctionnalités de l'API gratuitement"
                        firstArgument="Bénéficiez d'un accès gratuit à l'API"
                        secondArgument="Les contributions sont contrôlées par la modération"
                        description="C'est aussi un moyen de nous soutenir, alors n'hésitez plus ! "
                    />
                    <LinkPage 
                        className="doc-button absolute"
                        link="/contribute"
                        alt="contribute"
                        text="Contribuer"
                    />
                    <PricingCards
                        className="pricing-card-container-2 white"
                        title="Abonnement"
                        subtitle="Abonnez vous pour profiter des avantages"
                        firstArgument="Accédez à l'API en illimité pour 7€ par mois"
                        secondArgument="Payez 70€ par an afin de profiter d'une réduction"
                        description="Accédez à notre service sans avoir besoin de contribuer"
                    />
                    <LinkPage 
                        className="button-blue absolute-2"
                        link="/"
                        alt="contact"
                        text="Nous contacter"
                    />
                </div>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}
