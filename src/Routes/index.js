import React from "react";
import { BrowserRouter as Route, Redirect, Switch } from "react-router-dom";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact />
            <Route path="/playlist" exact />
            <Route path="/search" exact />
            <Redirect from="*" to="/" />
        </Switch>
    );
};

export default Routes;
