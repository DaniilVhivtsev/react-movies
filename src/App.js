import React from "react";
import {Preloader} from "./Preloader";

function App(props) {
    return props.isLoading
        ? <Preloader/>
        : (
            <div>
                Hello world!
            </div>
        );
}

export default App;
