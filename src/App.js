import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./reset.scss";
import Header from "./components/Header";
import Routes from "./Routes";

function App() {
    return (
        <Router>
            <Header />
            <Routes />
        </Router>
    );
}

export default App;
