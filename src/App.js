import React, { useState } from "react";
import Clicker from "./Clicker";
import Ref from "./Ref";
import Timer from "./Timer";

function App() {
    const [isClicker, setIsClicker] = useState(false);

    return (
      <div>
          <button onClick={() => setIsClicker(!isClicker)}>
              Toggle timer
          </button>
          {/*{isClicker && <Clicker />}*/}
          {isClicker && <Timer />}
          <Ref />
      </div>
    );
}

export default App;
