import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Application from "./pages/Application";
import React from "react";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Application} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;