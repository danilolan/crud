import React from 'react';
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home';
import UserCrud from '../components/User/UserCrud';

function Routes(props) {
    return ( 
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/users' component={UserCrud}/>
        <Redirect from='*' to='/' />
    </Switch> );
}

export default Routes;