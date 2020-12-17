import React from 'react'
import './PricingCards.scss'

export default function PricingCards(props) {
    return (
        <div className={props.className}>
            <h4>{props.title}</h4>
            <div className="">{props.subtitle}</div>
            <ul>
                <li>{props.firstArgument}</li>
                <li>{props.secondArgument}</li>
            </ul>
            <div className="">{props.description}</div>
        </div>
    )
}
