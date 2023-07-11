import React, {useState, useEffect} from "react";

function State() {
    const [state, setState] = useState({
        count: 0,
        isCounting: false,
    })

    useEffect(() => {
        console.log(state);
    }, [state]);

    /*const [value, setValue] = useState(() => {
        const userCount = localStorage.getItem('count');
        return +userCount || 0;
    });

    setValue((prevValue) => {
        return prevValue + 1;
    } )*/

    const handleCount = () => {
        setState({
            ...state,
            count: state.count + 1
        });
    }

    const handleStatus = () => {
        setState({
            ...state,
            isCounting: !state.isCounting
        })
    }

    return (
        <div>
            <button onClick={handleCount}>click</button>
            <button onClick={handleStatus}>me too</button>
        </div>
    );
}

export default State;