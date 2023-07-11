import React, {useContext} from "react";
import {CustomContext} from "./Context";

export function Book(props) {
    const {
        addBook,
        removeBook,
    } = useContext(CustomContext);


    return (
        <>
            <div>{props.title}</div>
            <button onClick={() => removeBook(props.id)}>Remove book</button>
        </>
    )
}