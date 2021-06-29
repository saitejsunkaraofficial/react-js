import React, { Component } from 'react'

export default class AddContact extends Component {
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter name"></input>
                    </div>
                    <div className="field">
                    <label>Email</label>
                    <input type="email" name="name" placeholder="Enter Email Address"></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}
