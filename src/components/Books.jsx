import React, {useContext} from "react";
import {CustomContext} from "./Context";
import {Book} from "./Book";

function Books() {
    const {books = []} = useContext(CustomContext)

    return (
        <div>
            {
                books.map((book) => (
                    <Book key={book.id} {...book}></Book>
                ))
            }
        </div>
    );
}

export {Books};