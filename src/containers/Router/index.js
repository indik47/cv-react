import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Profile from "../../pages/Profile";
import Work from "../../pages/Work";
import Education from "../../pages/Education";
import Skills from "../../pages/Skills";
import Languages from "../../pages/Languages";
import Projects from "../../pages/Projects";
import Contacts from "../../pages/Contacts";
import userData from '../../jsonSrc/cv.json';


class Router extends Component {
  render() {
    return (
        <Switch>
            <Route exact path = "/" render={(props) => <Profile {...props} userData={userData}/>}/>
            <Route exact path = "/work" render={(props) => <Work {...props} workplaces={userData.jobs}/>}/>
            <Route exact path = "/education" render={(props) => <Education {...props} education={userData.education}/>}/>
            <Route exact path = "/skills" render={(props) => <Skills {...props} skills={userData["Technical skills"]}/>}/>
            <Route exact path = "/languages" render={(props) => <Languages {...props} languages={userData.languages}/>} />
            <Route exact path = "/projects" render={(props) => <Projects {...props} projects={userData.projects} />}/>
            <Route exact path = "/contacts" render={(props) => <Contacts {...props} contacts={userData.contacts}/>}/>
        </Switch>
    );
  }
}

export default Router;
