import React from 'react'
import './TextDiv.scss'
import LinkPage from '../../components/LinkPages/LinkPages'

export default function TextDiv({title, subtitle, bodyTitle, body1, body2, button}) {
  return (
      <div className="doc-main-component">
        <div className="doc-component container">
          <div className="title-container">
            <h3 className="title">{title}</h3>
            <h5 className="subtitle">{subtitle}</h5>
          </div>
          <div className="doc-body">
            <h5>{bodyTitle}</h5>
            <p>{body1}</p>
            <p>{body2}</p>
            <div className="doc-button-container">
              <LinkPage 
                className="doc-button"
                link="/documentation"
                alt="Doc"
                text={button}
              />
            </div>
          </div>
        </div>
      </div>
  )
}