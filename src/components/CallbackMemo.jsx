import React, {useCallback, useMemo, useState} from "react";

// Мемоизация
const CountButton = React.memo(({onClick, count}) => { // и нужно обенуть в функцию  React.memo
    // идет предотвращение повтороного вызова, если пришли данные, на основе которых уже все отрисовано
    console.log('render', count);
    return (
        <button onClick={onClick}>
            {count}
        </button>
    )
})

export function DualButton() { // мемо нужно для того, например, чтобы при изменении count1
    // не редерить и CountButton для count1 и CountButton для count2

    // Нужны например, когда быльшие вычисления идут, сложные функции
    const [count1, setCount1] = useState(0);
    const [customParam, setCustomParam] = useState(0);
    const increment1 = useCallback(() => setCount1(c => c + 1), []); // возвращает функцию

    const [count2, setCount2] = useState(0);
    const increment2 = useCallback(() => setCount2(c => c + 1), []);

    const customFunction = useMemo(() => "returnValue", [customParam]); // возвращает значение

    return (
        <>
            <CountButton count={count1} onClick={increment1}/>
            <CountButton count={count2} onClick={increment2}/>
        </>
    )
}