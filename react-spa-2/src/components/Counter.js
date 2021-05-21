import React, { useState, Fragment } from 'react';
import Condition from './jsx'

const Counter = () => {

   const [number, setNumber] = useState(0);

   const Increase = () => {
       setNumber(number + 1)
   }

    return (
        <Fragment>
            <h3>Mi primer nummero es {number}</h3>
            <button onClick={Increase}>Counter</button>
            <Condition />
        </Fragment>
    )
}

export default Counter;
