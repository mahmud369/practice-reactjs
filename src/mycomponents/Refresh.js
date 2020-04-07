import React, { Component } from 'react';

class Refresh extends Component {

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    refreshAgain(){
        this.forceUpdate();
    }

    render() {
        return (
            <div> 
                <h1>{this.getRandomInt(30, 50)}</h1>            
                <button className="btn btn-success" onClick={this.refreshAgain.bind(this)}>Refresh</button>
            </div>
        );
    }
}

export default Refresh;