import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Sac from '../../src/pages/sac'

const Routers = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Sac}></Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Routers;