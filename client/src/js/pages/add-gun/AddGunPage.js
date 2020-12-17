import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Form from '../../components/AddGunForm/AddGunForm'
import './AddGunPage.scss'

export default function AddGunPage() {

    return (
        <div className="home-page">
            <div className="header">
                <Header/>
            </div>

            <div className="background-title-image">
                <h1>Ajouter une réplique</h1>
            </div>

            <div className="container">
                <Form/>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}