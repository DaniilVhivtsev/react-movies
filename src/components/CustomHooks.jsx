import React, {useState} from 'react';
import {usePrevious} from "./customHooks/usePrevious";
import {useLocalStorage} from "./customHooks/useLocalStorage";

export function CustomHooks() {
    const [count, setCount] = useLocalStorage(0, 'count');

    const prevCount = usePrevious(count);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Update</button>
            <h2>Current: {count}</h2>
            <h2>Previous: {prevCount}</h2>
        </div>
    );
}