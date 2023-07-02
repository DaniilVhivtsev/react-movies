import React, {useState, useEffect, useRef} from "react";

function setDefaultValue() {
    const userCount = localStorage.getItem('count');
    return userCount ? +userCount : 0;
}

export default function Timer() {
    const [count, setCount] = useState(setDefaultValue());
    const [isCounting, setIsCounting] = useState(false);
    const timerIdRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count])

    useEffect(() => {
        console.log('isCounting set interval')
        if (isCounting) {
            console.log(true)
            timerIdRef.current = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }

        return () => {
            console.log('isCounting clear interval')

            timerIdRef.current && clearInterval(timerIdRef.current);
            timerIdRef.current = null;
        };
    }, [isCounting])

    const handleStart = () => {
        setIsCounting(true);
    };

    const handleStop = () => {
        setIsCounting(false);
    };

    const handleReset = () => {
        setCount(0);
        setIsCounting(false);
    };

    return (
        <div style={{margin: 'auto', width: '300px'}}>

            <h1>React Timer</h1>
            <h2>{count}</h2>

            {
                isCounting
                    ? <button onClick={handleStop}>Stop</button>
                    : <button onClick={handleStart}>Start</button>
            }
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}