import React from 'react'
import Header from '../../components/Header/Header'
import CardComponent from '../../components/TestComponent/CardComponent'
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
                        imageUnactive='images/collaboration-unactive.svg'
                        title='Collaboration'
                    // On mouseOver
                        imageActive='images/collaboration-active.svg'
                        body='C du lorem ipsum ça wallah C du lorem ipsum'
                    />

                    <div className="card-separator"></div>

                    <CardComponent
                    // Normal state
                        imageUnactive='images/collaboration-unactive.svg'
                        title='Collaboration'
                        imageActive='images/collaboration-active.svg'
                        body='C du lorem ça wallah C du lorem ipsum ça wallah'
                    />

                    <div className="card-separator"></div>

                    <CardComponent
                    // Normal state
                        imageUnactive='images/collaboration-unactive.svg'
                        title='Collaboration'
                    // On mouseOver
                        imageActive='images/collaboration-active.svg'
                        body='C du lorem ça wallah C du lorem ipsum ça wallah'
                    />

                    <div className="card-separator"></div>

                    <CardComponent
                    // Normal state
                        imageUnactive='images/collaboration-unactive.svg'
                        title='Collaboration'
                    // On mouseOver
                        imageActive='images/collaboration-active.svg'
                        body='C du lorem ça wallah C du lorem ipsum ça wallah'
                    />
                </div>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}
