import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MyDomNode extends Component{

    MyFunc=()=>{
        var img_id = document.getElementById('veg_1');
        ReactDOM.findDOMNode(img_id).src = "https://malikseeds.com/wp-content/uploads/2016/10/Indira_Plus-3.jpg";
    }

    render(){
        return (
            <div>
                <p>
                    <button onClick={this.MyFunc}>Click Me</button>
                </p>
                <img id="veg_1" src="https://malikseeds.com/wp-content/uploads/2016/10/romeo.jpg"></img>
            </div>
        );
    }
}

export default MyDomNode;