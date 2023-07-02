import React from "react";
import Header from "./layout/Header"
import Footer from "./layout/Footer";
import Main from "./layout/Main";

function App() {
    return (
        <>{/*или React.Fragment*/}
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App;
