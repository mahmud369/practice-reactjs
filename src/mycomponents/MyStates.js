import React, { Component } from 'react';

class MyStates extends Component {
    constructor() {
        super();
        var languages = {            
            TITLE_1: "A. R. Malik Seeds Pvt. Ltd.",
            TITLE_2: "DISB Solutions Ltd.",
            ADDRESS: "Aftabnagar, Badda, Dhaka",
            WEBLINK: "http://www.malikseeds.com/",
            OUTLETS: ["Amtoli", "Dashuria", "Karimgonj"],
            VALUES: {
                val_1: 20,
                val_2: 30,
                val_3: 40
            }
        }
        this.state = languages;
    }

    render() {
    return (
    <div>
        <br/>
        <h3>Welcome to {this.state.TITLE_2}</h3>
        <h6>A sister concern of {this.state.TITLE_1}</h6>
        <p><a target="_blank" href={this.state.WEBLINK}>Visit Website</a></p>
        <p>Address: {this.state.ADDRESS}</p>
        <ol style={{width:200, margin:"0 auto"}}>
            <li>{this.state.OUTLETS[0]} (Stock: {this.state.VALUES.val_1})</li>
            <li>{this.state.OUTLETS[1]} (Stock: {this.state.VALUES.val_2})</li>
            <li>{this.state.OUTLETS[2]} (Stock: {this.state.VALUES.val_3})</li>
        </ol>
    </div>
    );
    }
}

export default MyStates;