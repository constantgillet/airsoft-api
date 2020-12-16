import React from 'react'
import TestComponent from '../../components/TestComponent/TestComponent'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './HomePage.scss'

export default function HomePage() {

    return (
        <div className="home-page">
            <div className="header">
                <Header/>
            </div>
            <TestComponent/>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}
