import React, { Component } from 'react';

import {Switch, Route} from 'react-router-dom'
import Homepage from "../../pages/Homepage";
import Experience from "../../pages/Experience";


class Router extends Component {
  render() {
    return (
        <Switch>
            <Route exact path = "/" component={Homepage}/>
            <Route exact path = "/exp" component={Experience}/>
            {/* <Route exact path = "/abilities" component={Abilities}/>
            <Route exact path = "/projects" component={Experience}/>
            <Route exact path = "/projects" component={Experience}/> */}
        </Switch>
    );
  }
}

export default Router;
