import React from 'react';

const Arrow=()=>{

    const MySum=(a, b)=>{
        alert('Your Sum: '+ (a + b));
    }

    return(
        <button className="btn btn-xs btn-warning" onClick={MySum.bind(this, 35, 65)}>
            Show Sum
        </button>
    );
}

export default Arrow;