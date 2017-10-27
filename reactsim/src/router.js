import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShelfA from './components/ShelfA/ShelfA'
import ShelfB from './components/ShelfB/ShelfB'
import ShelfC from './components/ShelfC/ShelfC'
import ShelfD from './components/ShelfD/ShelfD'
import Home from './components/Home/Home'
import Bin from './components/Bin/Bin'
import App from './App'



export default(
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/shelfA' component={ShelfA} />
        <Route path='/shelfB' component={ShelfB} />
        <Route path='/shelfC' component={ShelfC} />
        <Route path='/shelfD' component={ShelfD} />
        <Route path='/Bin' component={Bin} />
    </Switch>
);