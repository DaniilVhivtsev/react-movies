import React, {useEffect, useReducer} from "react";

const countReducer = (state, {type}) => {
    if (type === 'START') {
        return {
            ...state,
            isCounting: true
        };
    }
    else if (type === 'STOP') {
        return {
            ...state,
            isCounting: false
        };
    }
    else if (type === 'RESET') {
        return {
            count: 0,
            isCounting: false
        };
    }
    else if (type === 'TICK') {
        return {
            count: state.count + 1,
            isCounting: true
        };
    }

    return state;
}

function setDefaultValue() {
    const userCount = localStorage.getItem('count');
    return userCount ? +userCount : 0;
}

export default function Timer() {
    const [{count, isCounting}, dispatch] = useReducer(countReducer, {count: setDefaultValue(), isCounting: false});


    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count])

    useEffect(() => {
        let timerId = null;
        console.log('isCounting set interval')
        if (isCounting) {
            timerId = setInterval(() => {
                dispatch({type: 'TICK'});
            }, 1000);
        }

        return () => {
            console.log('isCounting clear interval')

            timerId && clearInterval(timerId);
            timerId = null;
        };
    }, [isCounting])

    return (
        <div style={{margin: 'auto', width: '300px'}}>

            <h1>React Timer</h1>
            <h2>{count}</h2>

            {
                isCounting
                    ? <button onClick={() => dispatch({type: 'STOP'})}>Stop</button>
                    : <button onClick={() => dispatch({type: 'START'})}>Start</button>
            }
            <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
        </div>
    );
}