import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Sac from '../../src/pages/sac'
import Page404 from "../../src/pages/error/404"

const Routers = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/?marca=p" component={Sac}></Route>
                <Redirect exact from="/" to="/?marca=p" />
                <Route path="*" component={Page404}></Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Routers;
