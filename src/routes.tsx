import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Trench from "./pages/Trench/Trench";


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/trench" component={Trench} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;