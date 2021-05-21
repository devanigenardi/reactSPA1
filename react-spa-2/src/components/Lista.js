import React, {useState, Fragment} from 'react'

const Lista = () => {

    const [listNumbers, setNumber] = useState([1,2,3,4,5,6,7,8,9]);

    const [number, setNumberCounter] = useState(10);

    const addElement = () => {

        setNumberCounter(number +1)
        
        const staticNum = 10;
        setNumber([...listNumbers, number])
    }

    return (
       <Fragment>
           <h2>Lista {number}</h2>
           <button onClick={addElement}>Add Element</button>
           <ul> { listNumbers.map((ele, index) => <li key={index}>Element: {ele} pos: {index}</li>) }</ul>
       </Fragment>
    )
}

export default Lista;