import React from 'react'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
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

            <div className="pricing-main-container">
                <h2 className="pricing-title">
                    <div className="pricing-line"></div>
                    Pricing et plans
                </h2>
                <div className="pricing-cards">
                    <PricingCards
                        className="pricing-card-container blue"
                        title="Programme de contribution"
                        subtitle="Contribuez pour profiter des avantages"
                        firstArgument="Bénéficiez d'un accès gratuit à l'API"
                        secondArgument="Les contributions sont contrôlées par la modération"
                        description="C'est aussi un moyen de nous soutenir, alors n'hésitez plus ! "
                    />
                    <PricingCards
                        className="pricing-card-container white"
                        title="Abonnement"
                        subtitle="Abonnez vous pour profiter des avantages"
                        firstArgument="Accédez à l'API en illimité pour XX€ par mois"
                        secondArgument="Payez à l'utilisation afin d'avoir plus de flexibilités"
                        description="Accédez à notre service sans avoir besoin de contribuer"
                    />
                </div>
                <div className="pricing-button">
                    <Button 
                        className="button-blue"
                        //Go to pricing page
                        link="/pricing-page"
                        alt="link"
                        text="Les tarifs"
                    />
                </div>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}
