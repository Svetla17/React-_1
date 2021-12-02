import React, { useState } from 'react'

const TestComponentFunction = () => {
    const [counter, setCounter] = useState(0);
    // const [color, setColor] = useState(0);
    const hendleClick = () => {
        setCounter((prevCounter) => prevCounter + 1)
    }

    const hendleClickMin = () => {
        setCounter((prevCounter) => prevCounter - 1)
    }

    let name = "Sveta";
    return (<>
        <h1>{name}</h1>
        <button onClick={hendleClick}>Update count</button>
        <button onClick={hendleClickMin}>Update count</button>
        <p> Test Class component {counter}</p>

    </>)


}



export default TestComponentFunction;

