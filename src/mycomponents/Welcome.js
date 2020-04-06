import React, { Component } from 'react';

class Welcome extends Component {

    doThisFromClass(age){
        alert('Your age is: '+age);
    }

    render() {
        return (
        <div>            
            <button onClick={this.doThisFromClass.bind(this, 26)}>
                Click Me
            </button>    
            <h4>Welcome to {this.props.name}</h4>
        </div>
        );
    }

}

export default Welcome;