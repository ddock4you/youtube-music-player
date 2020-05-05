import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import NowList from "./NowList";
import PlayList from "./PlayList";
import Search from "./Search";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={NowList} />
            <Route exact path="/playlist" component={PlayList} />
            <Route exact path="/search" component={Search} />
        </Switch>
    );
};

export default Routes;
