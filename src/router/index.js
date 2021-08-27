import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Sac from '../../src/pages/sac'
import Page404 from "../../src/pages/error/404"

const Routers = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/sac" component={Sac}></Route>
                <Redirect exact from="/" to="/sac?marca=p" />
                <Route path="*" component={Page404}></Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Routers;
