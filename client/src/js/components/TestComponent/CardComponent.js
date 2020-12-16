import React from 'react'
import './CardComponent.scss'

export default function CardContainer({imageUnactive, imageActive, title, body}) {
  return (
      <div className="Card-component">
          <div className="image-container">
            <img className="unactive-image" src={imageUnactive} alt=" "/>
            <img className="active-image" src={imageActive} alt=" "/>
          </div>
          <div className="card-body">
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
          <div className="card-more">
            <img src="images/more.svg" alt="Voir plus"/>
          </div>
      </div>
  )
}