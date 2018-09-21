import React, { Component } from 'react';

import {Switch, Route} from 'react-router-dom'
import Profile from "../../pages/Profile";
import Experience from "../../pages/Experiences";
import Skills from "../../pages/Skills";
import Projects from "../../pages/Projects";
import Contacts from "../../pages/Contacts";


class Router extends Component {
  render() {
    return (
        <Switch>
            <Route exact path = "/" component={Profile}/>
            <Route exact path = "/exp" component={Experience}/>
            <Route exact path = "/skills" component={Skills}/>
            <Route exact path = "/projects" component={Projects}/>
            <Route exact path = "/contacts" component={Contacts}/>
        </Switch>
    );
  }
}

export default Router;
