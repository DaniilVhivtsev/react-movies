import React, { useState, useEffect } from "react";

function Clicker() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        console.log('Hello from clicker!', count);

        return () => console.log('Goodbye clicker');
    }, [count]);

    return (
        <div>
            <button onClick={increment}>+</button>
            <span style={{display: 'inline-block', margin:'0 0.5rem'}}>{count}</span>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Clicker;
