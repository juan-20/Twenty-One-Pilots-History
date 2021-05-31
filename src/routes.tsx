import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Trench from "./pages/Trench/Trench";


const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/trench" exact component={Trench} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;