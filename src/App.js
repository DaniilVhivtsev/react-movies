import React from "react";
import {Preloader} from "./Preloader";
import State from "./components/State";
import Effect from "./components/Effect";
import {Context} from "./components/Context";
import {Books} from "./components/Books";
import BlinkyRender from "./components/LayoutEffect";
import {DualButton} from "./components/CallbackMemo";
import {UseImperativeHook} from "./components/UseImperativeHandleHook";
import {UseReducerExample} from "./components/UseReducerExample";
import {CustomHooks} from "./components/CustomHooks";
import Timer from "./components/timer/Timer";

function App() {
    /*return (
        <div>
            {/!*<State />*!/}
            {/!*<Effect />*!/}
        </div>
    );*/

    return (
        <Context>
            {/*<Books />*/}
            {/*<BlinkyRender />*/}
            {/*<DualButton />*/}
            {/*<UseImperativeHook />*/}
            {/*<UseReducerExample />*/}
            {/*<CustomHooks />*/}
            <Timer />
        </Context>
    )
}

export default App;
