import React, {useImperativeHandle, useRef, useState} from "react";

// Дает возможность передать некоторые сущности наверх (можно сказать, что пропсы)

const TextInput = React.forwardRef((props, ref) => {
    const { hasError, placeholder, value, update } = props;
    const inputRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current.focus();
            }
        };
    });

    return (
        <input
            ref={inputRef}
            value={value}
            onChange={(e) => update(e.target.value)}
            placeholder={placeholder}
            style={{
                borderColor: hasError ? "red" : "black"
            }}
        />
    );
})

const Form = () => {
    const [card, setCard] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const cardEl = useRef(); // current = {focus() {}}
    const phoneEl = useRef();

    const validate = () => {
        if (card.length < 16) {
            setError('card');
            cardEl.current.focus();
            return;
        }

        if (phone.length < 11) {
            setError('phone');
            phoneEl.current.focus();
            return;
        }

        setError('');
    }

    return (
        <div>
            <h2>useImperativeHandle hook</h2>
            <TextInput
                hasError={error === 'card'}
                placeholder={'Card'}
                value={card}
                update={setCard}
                ref={cardEl}
            />
            <TextInput
                hasError={error === 'phone'}
                placeholder={'Phone'}
                value={phone}
                update={setPhone}
                ref={phoneEl}
            />
            <button onClick={validate}>Validate</button>
        </div>
    );
}

export function UseImperativeHook () {
    return (
        <div>
            <Form />
        </div>
    )
}