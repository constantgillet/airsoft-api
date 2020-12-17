import React from 'react'
import './Button.scss'

export default function Bouton(props) {
    return (
        <a className={props.className} href={props.href} alt={props.alt}>{props.text}</a>
    )
  }