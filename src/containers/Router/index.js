import React, { Component } from 'react';

import {Switch, Route} from 'react-router-dom'
import Profile from "../../pages/Profile";
import Work from "../../pages/Work";
import Education from "../../pages/Education";
import Skills from "../../pages/Skills";
import Languages from "../../pages/Languages";
import Projects from "../../pages/Projects";
import Contacts from "../../pages/Contacts";


class Router extends Component {
  render() {
    return (
        <Switch>
            <Route exact path = "/" component={Profile}/>
            <Route exact path = "/exp" component={Work}/>
            <Route exact path = "/Education" component={Education}/>
            <Route exact path = "/skills" component={Skills}/>
            <Route exact path = "/languages" component={Languages}/>
            <Route exact path = "/projects" component={Projects}/>
            <Route exact path = "/contacts" component={Contacts}/>
        </Switch>
    );
  }
}

export default Router;
