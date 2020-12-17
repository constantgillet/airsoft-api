import React from 'react'
import Header from '../../components/Header/Header'
import CardComponent from '../../components/TestComponent/CardComponent'
import DocComponent from '../../components/TestComponent/DocComponent'
import PricingCards from '../../components/PricingCards/PricingCards'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import './HomePage.scss'

export default function HomePage() {

    return (
        <div className="home-page">
            <div className="header">
                <Header/>
            </div>

            <div className="background-title-image">
                <h1>Airsoft API</h1>
            </div>

            <div className="card-main-container">
                <div className="card-container">
                    <CardComponent
                    // Normal state
                        imageUnactive="images/collaboration-unactive.svg"
                        title="Collaboration"
                    // On mouseOver
                        imageActive="images/collaboration-active.svg"
                        body="C du lorem ipsum ça wallah C du lorem ipsum"
                    />

                    <div className="card-separator"></div>

                    <CardComponent
                    // Normal state
                        imageUnactive="images/collaboration-unactive.svg"
                        title="Collaboration"
                        imageActive="images/collaboration-active.svg"
                        body="C du lorem ça wallah C du lorem ipsum ça wallah"
                    />

                    <div className="card-separator"></div>

                    <CardComponent
                    // Normal state
                        imageUnactive="images/collaboration-unactive.svg"
                        title="Collaboration"
                    // On mouseOver
                        imageActive="images/collaboration-active.svg"
                        body="C du lorem ça wallah C du lorem ipsum ça wallah"
                    />

                    <div className="card-separator"></div>

                    <CardComponent
                    // Normal state
                        imageUnactive="images/collaboration-unactive.svg"
                        title="Collaboration"
                    // On mouseOver
                        imageActive="images/collaboration-active.svg"
                        body="C du lorem ça wallah C du lorem ipsum ça wallah"
                    />
                </div>
            </div>

            <DocComponent
                title="Informations complémentaires sur l'API"
                subtitle="Complétez votre site avec notre API"
                bodyTitle="Airsoft API permet de récupérer simplement les informations concernant les répliques d'airsoft"
                body1="Récupérer aisément des données comme le modèle, la catégorie, la marque ou la puissance d’une réplique d’Airsoft par exemple. Mais ce n’est pas tout !
                Vous pourrez retrouver des informations complémentaires comme des photos, des descriptions et plein d’autres informations."
                body2="Airsoft API c’est des données sûres et fiables, vérifiées par les équipes, afin de vous transmettre les informations les plus précises possibles."
                button="Documentation"
            />

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
                        href="#"
                        alt="link"
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
