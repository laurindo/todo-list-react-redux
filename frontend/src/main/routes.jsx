import React from 'react';
import {Switch, Route} from 'react-router-dom';

import About from '../about/about';
import Todo from '../todo/todo';

export default props => (
    <Switch>
        <Route path='/about' component={About} />
        <Route path='/todos' component={Todo} />
        <Route exact path='/' component={Todo} />
    </Switch>
);