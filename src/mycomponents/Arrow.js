import React from 'react';

const Arrow=()=>{

    const MySum=(a, b)=>{
        alert('Your Sum: '+ (a + b));
    }

    return(
        <button className="btn btn-xs btn-success" onClick={MySum.bind(this, 12, 18)}>
            MyButton
        </button>
    );
}

export default Arrow;