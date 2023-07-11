import React, {useEffect, useLayoutEffect, useState} from 'react';

const BlinkyRender = () => {
    const [value, setValue] = useState(0);

    useLayoutEffect(() => { // обновляется один раз, пока до конца не закончит работать с переменной value
        if (value === 0) {
            setValue(10 + Math.random() * 200);
        }
    }, [value]);

    return (
        <button onClick={() => setValue(0)}>value: {value}</button>
    )
}

export default BlinkyRender;