import React from 'react';

function Hello(props) {

    function doThis(name){
        alert('Hello! '+name);
    }

    return (
    <div>
    <button onClick={doThis.bind(this, "Rumki")}>Click Me</button>
        <h2> I am  {props.name}! My age {props.age} </h2>
    </div>
    );
}

export default Hello;