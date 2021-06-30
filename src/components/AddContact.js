import React, { Component } from 'react'

export default class AddContact extends Component {
    state = {
        name:"",
        email:""
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.name===""||this.state.email==="") {
            alert("All fields are mandatory.");
        }
        console.log(this.state.name, this.state.email);
    }
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} autoComplete="false" autoFocus={true} />
                    </div>
                    <div className="field">
                    <label>Email</label>
                    <input type="email" name="name" placeholder="Enter Email Address" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} autoComplete="false" />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}
