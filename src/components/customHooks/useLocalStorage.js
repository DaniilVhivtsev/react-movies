import {useEffect, useState} from "react";

function useLocalStorage(initialState, key) {
    const get = () => {
        const storage = localStorage.getItem(key);

        return storage ? +storage : initialState;
    }

    const [value, setValue] = useState(get);

    useEffect(() => {
        localStorage.setItem(key, value)
    }, [value]);

    return [value, setValue];
}

export {useLocalStorage};