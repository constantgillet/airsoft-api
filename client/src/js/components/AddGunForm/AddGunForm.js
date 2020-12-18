import React, { Component } from 'react'
import './AddGunForm.scss'
import 'bootstrap-select';


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
                category: "revolver",
                description: "",
                file: "",
                price: ""
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

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
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

    handlePriceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    }

    handleSubmit= (event) => {
        alert(`${this.state.gunName} ${this.state.reference} ${this.state.manufacturer} ${this.state.power} ${this.state.weight} ${this.state.length} ${this.state.category} ${this.state.description} ${this.state.file}`)
        event.preventDefault()
    }

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
                                        <label>Prix (€)</label>
                                        <input 
                                            type="text" 
                                            value={this.state.price}
                                            onChange={this.handlePriceChange}
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

                        <div className="input-container">
                            <label>Catégorie</label>                             
                            <select value={this.state.category} onChange={this.handleCategoryChange}>
                                <option value="Revolver">Révolver</option>
                                <option value="AEGRifle">Réplique longues AEG</option>
                                <option value="GBBRRifle">Réplique longues GBBR</option>
                                <option value="GGBGun">Réplique de poing GBB</option>
                                <option value="NBBGun">Réplique de poing NBB</option>
                                <option value="AEPGun">Réplique de poing AEP</option>
                                <option value="GasSniperRifle">Réplique de sniper gaz</option>
                                <option value="SpringSniperRifle">Réplique de sniper spring</option>
                                <option value="SpringShotgun">Réplique à pompe spring</option>
                                <option value="GasShotgun">Réplique à pompe gaz</option>
                            </select>
                        </div>
                        
                        <div className="button-container">
                            <button className="button-blue-form button-border-white button-border-white" type="submit">Valider</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default Form