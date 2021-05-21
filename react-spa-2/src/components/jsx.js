import React, { Fragment } from 'react';

const Condition = () => {

    const temp = 21;

    return (
        <Fragment>
            <h2>Lest fragment</h2>
            <p>Temperature {temp > 20 ? "is: very hot" : "is: not that cold"}</p>
        </Fragment>
    )
}

export default Condition