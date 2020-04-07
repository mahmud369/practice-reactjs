import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyReactDom extends Component {

    MyFunc = (element) => {
        var container = document.getElementById("title");
        var myCallback = function () {
            alert("Successfully Done!");
        }
        ReactDOM.render(element, container, myCallback);
    }

    render() {
        return (
            <div>
                <h1 id="title">Hello! I am Mahmud!</h1>
                <button onClick={this.MyFunc.bind(this, "A JavaScript Programmer")}>Change</button>
            </div>
        );
    }
}

export default MyReactDom;