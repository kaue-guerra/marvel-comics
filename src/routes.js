import React from 'react';
import { Switch, Route } from "react-router-dom"

import Comics from './pages/comics';
import CartPage from './pages/cart'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Comics} exact />
            <Route path="/cart" component={CartPage} />
        </Switch>
    );
}

export default Routes;

