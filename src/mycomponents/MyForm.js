import React, { Component } from 'react';

class MyForm extends Component {

    constructor() {
        super();

        this.state = {
            name: "",
            age: "",
            gender: "",
            education: "",
            village: "",
            upazilla: "",
            district: ""
        }
    }

    changeHandler=(event)=>{

        this.setState({name: event.target.value});
    }

    render() {
        return (
            <div>
                <form>
                    <h5>My Form</h5>
                    <br />
                    <input type="text" onChange={this.changeHandler} placeholder="Your Name"></input>
                    <br />
                    <p>Your Name: {this.state.name}</p>
                    <br /><br />
                    <button type="submit" className="btn btn-xs btn-danger">Submit Now</button>
                </form>
            </div>
        );
    }
}

export default MyForm;