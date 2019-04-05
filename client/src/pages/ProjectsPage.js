import React, { Component } from 'react';
import Projects from '../containers/Projects';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';
import PropTypes from 'prop-types';
import {
    Title
} from '../styles';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: []
        }
    }
    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {
        return (
            <>
                <Title>All projects</Title>
                <Projects projects={this.props.projects} />
            </>
        );
    }
}

ProjectsPage.propTypes = {
    projects: PropTypes.array.isRequired,
    fetchProjects: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        projects: state.projects.projects || []
    }
}

const mapDispatchToProps = {
    fetchProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);