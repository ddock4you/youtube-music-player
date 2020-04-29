import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import "../scss/reset.scss";
import Header from "./Header";
import NowList from "../Routes/NowList";
import PlayList from "../Routes/PlayList";
import Search from "../Routes/Search";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" render={(props) => <NowList />} />
                <Route exact path="/playlist" component={PlayList} />
                <Route exact path="/search" component={Search} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
}

export default App;
