import React from "react";
import {BrowserRouter, Routes, Route, Switch} from "react-router-dom";

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {NotFound} from "./pages/NotFound";
import {Movie} from "./pages/Movie";
import {Category} from "./pages/Category";
import {Recipe} from "./pages/Recipe";

function App() {
    return (
        <>
            <BrowserRouter> {/*basename='/react-food'*/}
                <Header/>
                <main className="container content">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/about" Component={About}/>
                        <Route path="/contact" Component={Contact}/>
                        <Route path='/category/:title' Component={Category}/>
                        <Route path='/meal/:id' Component={Recipe}/>
                        {/*<Route path='/meal/:id' Component={}/>*/}
                        <Route path='/movies/:id' Component={Movie}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </main>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
