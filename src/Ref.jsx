import React, {useEffect, useRef, useState} from "react";

function Ref() {
    // const inputEl = useRef(null);
    // console.log(inputEl);
    const numRef = useRef(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // console.log(inputEl)
        console.log(numRef.current);
    });

    const handleClick = () => {
        numRef.current = 1;
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div>
            {/*<input placeholder='name' ref={inputEl}/>*/}
            <button onClick={handleClick}>{numRef.current}</button>
        </div>
    );
}

export default Ref;
