import React, { Component } from 'react';
import ProjectContainer from '../containers/Project';
import { connect } from 'react-redux';
import { fetchProject, fetchProjects, deleteProject, fetchProjectActions } from '../actions';
import { history } from '../';
import PropTypes from 'prop-types';

class ProjectPage extends Component {
    constructor(props) {
        super(props);

        this.editProject = this.editProject.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
    }
    async componentDidMount() {
        await this.props.fetchProjects();
        await this.props.fetchProject(this.props.match.params.id);
        await this.props.fetchProjectActions(this.props.match.params.id);
    }

    editProject(e) {
        e.preventDefault();
        history.push(`/projects/${this.props.project.id}/edit`);
    }

    deleteProject(e) {
        e.preventDefault();
        this.props.deleteProject(this.props.project.id);
    }

    render() {
        return (
            <>
                {this.props.project && this.props.projectActions && <ProjectContainer project={this.props.project} editProject={this.editProject} deleteProject={this.deleteProject} projects={this.props.projects} projectActions={this.props.projectActions} />}
            </>
        );
    }
}

ProjectPage.propTypes = {
    projects: PropTypes.array.isRequired,
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    projectActions: PropTypes.array.isRequired,
    fetchProject: PropTypes.func.isRequired,
    fetchProjects: PropTypes.func.isRequired,
    deleteProject: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        project: state.projects.project ? state.projects.project : {id: -1, name: ''},
        projects: state.projects.projects ? state.projects.projects : [],
        projectActions: state.projects.projectActions ? state.projects.projectActions : []
    }
}

const mapDispatchToProps = {
    fetchProject,
    deleteProject,
    fetchProjects,
    fetchProjectActions
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);