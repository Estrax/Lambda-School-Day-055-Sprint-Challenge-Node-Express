import React, { Component } from 'react';
import Actions from '../containers/Actions';
import { connect } from 'react-redux';
import { fetchActions, fetchProjects } from '../actions';
import PropTypes from 'prop-types';
import {
    Title
} from '../styles';

class ActionsPage extends Component {
    async componentDidMount() {
        await this.props.fetchActions();
        await this.props.fetchProjects();
    }

    render() {
        return (
            <>
                <Title>All actions</Title>
                {this.props.actions.length > 0 && this.props.projects.length > 0 && <Actions actions={this.props.actions} projects={this.props.projects} />}
            </>
        );
    }
}

ActionsPage.propTypes = {
    actions: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    fetchActions: PropTypes.func.isRequired,
    fetchProjects: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        actions: state.actions.actions || [],
        projects: state.projects.projects || []
    }
}

const mapDispatchToProps = {
    fetchActions,
    fetchProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionsPage);