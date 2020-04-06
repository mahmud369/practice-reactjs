import React, { Component } from 'react';

class MyDynamicStates extends Component {

    constructor() {

        super();

        this.state = {
            user: "Mahmud",
            message: "Please Login",
            actionBtn: "Login",
            isLoggedin: true
        }
    }

    changeStatus = (ls) => {
        this.setState(
            { isLoggedin: ls }
        );

        if(this.state.isLoggedin){
            this.setState(
                { message: "Welcome "+[this.state.user], actionBtn: "Logout", isLoggedin: false}
            );
        }else{
            this.setState(
                { message: "Please Login", actionBtn: "Login", isLoggedin: true}
            );
        }
    }

    render() {
        return (
            <div>
                <h4>{this.state.message}</h4>
                <button onClick={this.changeStatus.bind(this, this.state.isLoggedin)} className="btn btn-danger">{this.state.actionBtn}</button>
            </div>
        );
    }

}

export default MyDynamicStates;