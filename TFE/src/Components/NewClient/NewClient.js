import React, { Component } from 'react';
import './NewClient.css';
import axios from 'axios';
//const express = require('express');
//const newclient = express();


export class NewClient extends Component {


    constructor(props){
        super(props);
        this.state = {
            name: "",
            first_name:"",
            address:"",
            email: "",
            phone:"",
          };

    }

    onChange = e =>{
        this.setState({[e.target.name] : e.target.value});
        console.log(this.state.phone);
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
         var data = JSON.stringify(this.state)
         console.log(data)
        axios.post('https://github.com/%3Ccapriclo%3E/%3CTFE%3E/blob/master/db.json',data)
        .then(response => {
            console.log(response) 
        }).catch(error =>{
            console.log(error)
        })
        /*newclient.post('http://localhost:3012/', this.state)
        .then(response => {
            console.log(response) 
        }).catch(error =>{
            console.log(error)
        })*/
    }

    render() {
        const {name, first_name, address, email, phone} = this.state
        return (
            <div>
                <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                    <div className="wrapper wrapper--w780">
                        <div className="card card-3">
                            <div className="card-heading"></div>
                            <div className="card-body">
                                <h2 className="title">Nouveau Client</h2>
                                <form onSubmit={this.submitHandler}>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Nom" name="name" value={name} onChange={this.onChange} />
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Prénom" name="first_name"  value={first_name} onChange={this.onChange} />
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Adresse" name="address"  value={address} onChange={this.onChange} />
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="email" placeholder="Email" name="email" value={email} onChange={this.onChange} required />
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Phone" name="phone" value={phone} onChange={this.onChange} />
                                    </div>
                                    <div className="p-t-10">
                                        <button className="btn btn--pill btn--green" type="submit">Créer le client</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default NewClient