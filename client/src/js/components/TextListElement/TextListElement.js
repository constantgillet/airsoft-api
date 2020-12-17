import React from 'react'
import './TextListElement.scss'

export default function TextListElement({date, description}) {
  return (
    <div className="block-container">
        <div className="block-body">
            <p className="date">{date}</p>
            <p className="text">{description}</p>
        </div>
    </div>
  )
}