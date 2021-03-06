import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import NavbarContainer from '../containers/Navbar';
import ActionsPage from '../pages/ActionsPage';
import ActionPage from '../pages/ActionPage';
import NewActionPage from '../pages/NewActionPage';
import EditActionPage from '../pages/EditActionPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectPage from '../pages/ProjectPage';
import NewProjectPage from '../pages/NewProjectPage';
import EditProjectPage from '../pages/EditProjectPage';

export default (props) => {
    return (
        <Router history={props.history}>
            <div>
                <NavbarContainer />
                <Switch>
                    <Route path="/" exact component={ProjectsPage}/>
                    <Route path="/projects/new" exact component={NewProjectPage}/>
                    <Route path="/projects/:id" exact component={ProjectPage}/>
                    <Route path="/projects/:id/edit" exact component={EditProjectPage}/>
                    <Route path="/actions" exact component={ActionsPage}/>
                    <Route path="/actions/new" exact component={NewActionPage}/>
                    <Route path="/actions/:id" exact component={ActionPage}/>
                    <Route path="/actions/:id/edit" exact component={EditActionPage}/>
                </Switch>
            </div>
        </Router>
    );
}