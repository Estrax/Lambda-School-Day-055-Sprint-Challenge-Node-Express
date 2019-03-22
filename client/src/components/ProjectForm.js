import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProject, updateProject, fetchProject } from '../actions';
import {
    SubmitBtn,
    Title,
    FormComponent
} from '../styles';
import PropTypes from 'prop-types';

class ProjectForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            completed: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.addProject = this.addProject.bind(this);
        this.updateProject = this.updateProject.bind(this);
    }
    
    componentDidMount() {
        if(!this.props.addForm){
            this.props.fetchProject(this.props.projectID).then(_ => {
                this.setState({
                    name: this.props.name,
                    description: this.props.description,
                    completed: this.props.completed
                });
            });
        }
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

    addProject(e) {
        e.preventDefault();
        this.props.addProject({
            name: this.state.name,
            description: this.state.description,
            completed: this.state.completed
        });
    }

    updateProject(e) {
        e.preventDefault();
        this.props.updateProject({
            id: this.props.projectID,
            name: this.state.name,
            description: this.state.description,
            completed: this.state.completed
        });
    }

    render() {
        return (
            <>
                <FormComponent onSubmit={this.props.addForm ? this.addProject : this.updateProject} className="card">
                    <Title>
                        {this.props.addForm && "Add project"}
                        {!this.props.addForm && "Update project"}
                    </Title>
                    
                    <input
                        type="text"
                        name="name"
                        placeholder="Project name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />

                    <input
                        type="text"
                        name="description"
                        placeholder="Project description"
                        onChange={this.handleChange}
                        value={this.state.description}
                    />

                    Completed:
                    <input
                        type="checkbox"
                        name="completed"
                        onChange={this.handleCheckbox}
                        value={this.state.completed}
                        checked={this.state.completed}
                    />

                    <SubmitBtn
                        type="submit"
                        name="submit"
                        className="btn btn-primary"
                    />
                </FormComponent>
            </>
        );
    }
}

ProjectForm.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    addForm: PropTypes.bool.isRequired,
    addProject: PropTypes.func.isRequired,
    updateProject: PropTypes.func.isRequired,
    fetchProject: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        name: state.projects.project ? state.projects.project.name : '',
        description: state.projects.project ? state.projects.project.description : '',
        completed: state.projects.project ? state.projects.project.completed : false
    }
}

const mapDispatchToProps = {
    addProject,
    updateProject,
    fetchProject
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);