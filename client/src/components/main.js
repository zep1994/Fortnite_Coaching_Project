import React from 'react'
import Landing from './landingpage';
import { Switch, Route } from 'react-router-dom';
import Contact from './contact';
import New from './newapp';
import List from './list';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
        <Route path="/list" component={List} />
        <Route path="/newapp" component={New} />
    </Switch>
)

export default Main