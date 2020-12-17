import React from 'react'
import './StatusRecap.scss'

export default function StatusContainer() {
  return (
    <div className="main-container">
        <div className="sub-container">
            <div className="status-component">
                <h5>Database Server</h5>
                <img src="images/operational.svg" alt="status"/>
                <p>Operational</p>
            </div>
            <div className="status-component">
                <h5>Search Engine</h5>
                <img src="images/operational.svg" alt="status"/>
                <p>Operational</p>
            </div>
            <div className="status-component">
                <h5>Web Server</h5>
                <img src="images/operational.svg" alt="status"/>
                <p>Operational</p>
            </div>
            <div className="status-component">
                <h5>Status Recap</h5>
                <img src="images/operational.svg" alt="status"/>
                <p>Operational</p>
            </div>
        </div>
    </div>
  )
}