import React, { Component } from 'react'
import './AddGunForm.scss'
import 'bootstrap-select';
import toastr from 'toastr'

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
            file: event.target.files[0]
        })
    }

    handlePriceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    }

    handleSubmit= (event) => {
        event.preventDefault()

        const body = {
            name: this.state.gunName,
            reference: this.state.reference,
            brand: this.state.reference,
            power: this.state.power,
            weight: this.state.weight,
            length: this.state.length,
            category: this.state.category,
            description: this.state.description,
            image: this.state.file,
            price: this.state.price,
            email: "test@test.fr",
            familly: "cybergun"
        }

        const formData = new FormData();

        Object.keys(body).map((key, index) => {
            formData.append(key, body[key])
        });

        fetch("/references", {
            method: "POST",
            body: formData
        })
        .then(r => r.json())
        .then(data => {

            if (data.status == "success") {
                toastr.success("La référence a été ajoutée")
            } else {
                toastr.error("Erreur lors de l'ajout de la référence")
            }

            console.log(data)
        })
        .catch(err => {
            console.error(err)
        })
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
                                accept="image/x-png,image/jpeg"
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