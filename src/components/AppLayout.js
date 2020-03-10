import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import "../reset.scss";
import Header from "./Header";
import NowList from "../Routes/NowList";
import PlayList from "../Routes/PlayList";
import Search from "../Routes/Search";
import { musicList } from "../reducer";

function App() {
    useEffect(() => {
        localStorage.setItem("localPlayList", JSON.stringify(musicList));
    }, []);

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={NowList} />
                <Route exact path="/playlist" component={PlayList} />
                <Route exact path="/search" component={Search} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
}

export default App;
