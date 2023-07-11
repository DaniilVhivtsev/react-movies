import {useEffect, useRef} from "react";

// возрващаем предыдущее значение и ставим переданное значение в текущее
function usePrevious(value) {
    const ref = useRef(); // {current: null}

    useEffect(() => {
        ref.current = value;
    });

    // В первую очередь возвращает, а потом срабатывает useEffect.
    return ref.current;
}

export {usePrevious};