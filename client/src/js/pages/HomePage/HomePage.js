import React from 'react'
import Header from '../../components/Header/Header'
import CardComponent from '../../components/TestComponent/CardComponent'
import DocComponent from '../../components/TestComponent/DocComponent'
import Footer from '../../components/Footer/Footer'
import './HomePage.scss'

export default function HomePage() {

    return (
        <div className="home-page">
            <div className="header">
                <Header/>
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

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}
