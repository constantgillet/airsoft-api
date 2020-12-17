import React from 'react'
import './Button.scss'
import { Link } from 'react-router-dom'

export default function Bouton(props) {
    return (
        // <a className={props.className} href={props.link} alt={props.alt}>{props.text}</a>
        <Link className={props.className} to={props.link}>{props.text}</Link>
        )
  }