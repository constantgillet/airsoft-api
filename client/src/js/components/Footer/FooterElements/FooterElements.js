import React from 'react'
import './FooterElements.scss'

export default function FooterElements(props) {
    return (
        <div className="footer_elements">
            <div className="title text-subtitle">{props.title}</div>
            <div className="underline"></div>
            <p className="description">{props.description}</p>
        </div>
    )
}
