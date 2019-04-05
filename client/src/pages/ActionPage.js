import React, { Component } from 'react';
import ActionContainer from '../containers/Action';
import { connect } from 'react-redux';
import { fetchAction, fetchActions, deleteAction, fetchProjects } from '../actions';
import { history } from '../';
import PropTypes from 'prop-types';

class ActionPage extends Component {
    constructor(props) {
        super(props);

        this.editAction = this.editAction.bind(this);
        this.deleteAction = this.deleteAction.bind(this);
    }
    async componentDidMount() {
        await this.props.fetchActions();
        await this.props.fetchAction(this.props.match.params.id);
        await this.props.fetchProjects();
    }

    editAction(e) {
        e.preventDefault();
        history.push(`/actions/${this.props.action.id}/edit`);
    }

    deleteAction(e) {
        e.preventDefault();
        this.props.deleteAction(this.props.action.id);
    }

    render() {
        return (
            <>
                {this.props.action && this.props.projects.length > 0 && <ActionContainer action={this.props.action} editAction={this.editAction} deleteAction={this.deleteAction} actions={this.props.actions} projects={this.props.projects} />}
            </>
        );
    }
}

ActionPage.propTypes = {
    actions: PropTypes.array.isRequired,
    action: PropTypes.shape({
        id: PropTypes.number.isRequired,
        project_id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        notes: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired,
    projects: PropTypes.array.isRequired,
    fetchAction: PropTypes.func.isRequired,
    fetchActions: PropTypes.func.isRequired,
    deleteAction: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        action: state.actions.action ? state.actions.action : {id: -1, project_id: -1, description: '', notes: '', completed: false},
        actions: state.actions.actions ? state.actions.actions : [],
        projects: state.projects.projects ? state.projects.projects : []
    }
}

const mapDispatchToProps = {
    fetchAction,
    deleteAction,
    fetchActions,
    fetchProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionPage);