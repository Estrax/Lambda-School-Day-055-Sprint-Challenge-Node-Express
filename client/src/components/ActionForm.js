import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAction, updateAction, fetchAction, fetchProjects } from '../actions';
import {
    SubmitBtn,
    Title,
    FormComponent
} from '../styles';
import PropTypes from 'prop-types';

class ActionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            notes: '',
            completed: false,
            project_id: -1
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.addAction = this.addAction.bind(this);
        this.updateAction = this.updateAction.bind(this);
    }
    
    componentDidMount() {
        if(!this.props.addForm){
            this.props.fetchAction(this.props.actionID).then(_ => {
                this.setState({
                    description: this.props.description,
                    notes: this.props.notes,
                    completed: this.props.completed,
                    project_id: this.props.project_id
                });
            });
        }
        this.props.fetchProjects();
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    handleCheckbox(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.checked
        })
    }

    addAction(e) {
        e.preventDefault();
        this.props.addAction({
            description: this.state.description,
            notes: this.state.notes,
            completed: this.state.completed,
            project_id: this.state.project_id
        });
    }

    updateAction(e) {
        e.preventDefault();
        this.props.updateAction({
            id: this.props.actionID,
            description: this.state.description,
            notes: this.state.notes,
            completed: this.state.completed,
            project_id: this.state.project_id
        });
    }

    render() {
        return (
            <>
                {this.props.projects.length > 0 && <FormComponent onSubmit={this.props.addForm ? this.addAction : this.updateAction} className="card">
                    <Title>
                        {this.props.addForm && "Add action"}
                        {!this.props.addForm && "Update action"}
                    </Title>
                    
                    <input
                        type="text"
                        name="description"
                        placeholder="Action description"
                        onChange={this.handleChange}
                        value={this.state.description}
                    />

                    <input
                        type="text"
                        name="notes"
                        placeholder="Action notes"
                        onChange={this.handleChange}
                        value={this.state.notes}
                    />

                    Completed:
                    <input
                        type="checkbox"
                        name="completed"
                        onChange={this.handleCheckbox}
                        checked={this.state.completed}
                    />

                    <select
                        name="project_id"
                        onChange={this.handleChange}
                        value={this.state.project_id !== -1 ? this.state.project_id : ""}
                    >
                        <option value="" disabled>Select project</option>
                        {this.props.projects.map(project => <option key={project.id} value={project.id}>{project.name}</option>)}
                    </select>

                    <SubmitBtn
                        type="submit"
                        name="submit"
                        className="btn btn-primary"
                    />
                </FormComponent>}
            </>
        );
    }
}

ActionForm.propTypes = {
    actionID: PropTypes.number,
    description: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    project_id: PropTypes.number.isRequired,
    addForm: PropTypes.bool.isRequired,
    addAction: PropTypes.func.isRequired,
    updateAction: PropTypes.func.isRequired,
    fetchAction: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        description: state.actions.action ? state.actions.action.description : '',
        notes: state.actions.action ? state.actions.action.notes : '',
        completed: state.actions.action ? state.actions.action.completed : false,
        project_id: state.actions.action ? state.actions.action.project_id : -1,
        projects: state.projects.projects ? state.projects.projects : []
    }
}

const mapDispatchToProps = {
    addAction,
    updateAction,
    fetchAction,
    fetchProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionForm);