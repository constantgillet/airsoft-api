import React from 'react'
import Header from '../../components/Header/Header'
import Card from '../../components/ClassicCard/Card'
import TextDiv from '../../components/ClassicDiv/TextDiv'
import PricingCards from '../../components/PricingCards/PricingCards'
import LinkPage from '../../components/LinkPages/LinkPages'
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
                    <Card
                    // Normal state
                        imageUnactive="images/collaboration-unactive.svg"
                        title="Collaboration"
                    // On mouseOver
                        imageActive="images/collaboration-active.svg"
                        body="API collaborative dont les données sont implémentées par l'équipe comme par vous. Ce qui permet d'avoir la base de données la plus complète possible, et avec des mises à jour quotidiennes"
                    />

                    <div className="card-separator"></div>

                    <Card
                    // Normal state
                        imageUnactive="images/fiability-unactive.svg"
                        title="Fiabilité"
                        imageActive="images/fiability-active.svg"
                        body="Les données sont vérifiées par une équipe de modération afin de confirmer la fiabilité des données. Ainsi, les utilisateurs disposent tout le temps d'une base de données dont ils peuvent avoir confiance"
                    />

                    <div className="card-separator"></div>

                    <Card
                    // Normal state
                        imageUnactive="images/simplicity-unactive.svg"
                        title="Simplicité"
                    // On mouseOver
                        imageActive="images/simplicity-active.svg"
                        body="Cette API est très simple d’utilisation ! Vous pouvez récuperer les données avec de simples requettes."
                    />

                    <div className="card-separator"></div>

                    <Card
                    // Normal state
                        imageUnactive="images/complete-unactive.svg"
                        title="Complète"
                    // On mouseOver
                        imageActive="images/complete-active.svg"
                        body="Cette Api recense de nombreuses répliques d’airsoft en fournissant des informations utiles et précises venant de sources vérifiées."
                    />
                </div>
            </div>

            <TextDiv
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
                    <LinkPage 
                        className="button-blue"
                        link="/PricingPage"
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
