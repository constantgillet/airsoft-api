import React, { Component } from 'react'
import './AddGunForm.scss'


class Form extends Component {
    
        constructor(props) {
            super(props)
    
            this.state = {
                gunName: "",
                reference:"",
                manufacturer: "",
                power: "",
                weight: "",
                length: "",
                date: "",
                description: "",
                file: ""
            }
        }
    
    handleGunNameChange = (event) => {
        this.setState({
            gunName: event.target.value
        })
    }

    handleReferenceChange = (event) => {
        this.setState({
            reference: event.target.value
        })
    }

    handleManufacturerChange = (event) => {
        this.setState({
            manufacturer: event.target.value
        })
    }
    
    handlePowerChange = (event) => {
        this.setState({
            power: event.target.value
        })
    }

    handleDateChange = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    handleWeightChange = (event) => {
        this.setState({
            weight: event.target.value
        })
    }

    handleLengthChange = (event) => {
        this.setState({
            length: event.target.value
        })
    }

    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handleFileChange = (event) => {
        this.setState({
            file: event.target.value
        })
    }

    // handleSubmit= (event) => {

    // }

    render() {
        return (
            
            <div className="form-container">
                <h1>Intégrer une réplique</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="sub-container">
                        <div className="input-container">
                            <label>Nom de la réplique</label>
                            <input 
                                type="text" 
                                value={this.state.gunName}
                                onChange={this.handleGunNameChange}
                            />
                        </div>
                        <div className="input-container">
                            <label>Référence</label>
                            <input 
                                type="text" 
                                value={this.state.reference}
                                onChange={this.handleReferenceChange}
                            />
                        </div>
                        <div className="input-container">
                            <label>Constructeur</label>
                            <input 
                                type="text" 
                                value={this.state.manufacturer}
                                onChange={this.handleManufacturerChange}
                            />
                        </div>
                            <div className="mini-container">
                                <div className="mini-sub-container">
                                    <div className="input-container">     
                                        <label>Puissance (fps)</label>
                                        <input 
                                            type="text" 
                                            value={this.state.power}
                                            onChange={this.handlePowerChange}
                                        />
                                    </div>
                                    <div className="input-container">
                                        <label>Poids (g)</label>
                                        <input 
                                            type="text" 
                                            value={this.state.weight}
                                            onChange={this.handleWeightChange}
                                        />
                                    </div>
                                </div>
                                <div className="mini-sub-container">
                                    <div className="input-container">                                  
                                        <label>Date de fabrication</label>
                                        <input 
                                            type="text" 
                                            value={this.state.date}
                                            onChange={this.handleDateChange}
                                        />
                                    </div>
                                    <div className="input-container">
                                        <label>Longueur (cm)</label>
                                        <input 
                                            type="text" 
                                            value={this.state.length}
                                            onChange={this.handleLengthChange}
                                        />
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="sub-container2">
                        <div className="input-container">
                            <label>Description</label>
                            <textarea 
                                value={this.state.description}
                                onChange={this.handleDescriptionChange}
                            ></textarea>
                        </div>

                        <div className="input-container">
                            <label>Joindre une image</label>
                            <input
                                type="file"
                                value={this.state.file}
                                onChange={this.handleFileChange}
                            />
                        </div>
                        
                        <div className="button-container">
                            <button className="button-blue button-border-white button-border-white" type="submit">Valider</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default Form