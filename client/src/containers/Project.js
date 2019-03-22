import React from 'react';
import Project from '../components/Project';
import PropTypes from 'prop-types';

const ProjectContainer = (props) => {
    return (
        <>
            <Project
                key={props.project.id}
                id={props.project.id}
                name={props.project.name}
                description={props.project.description}
                completed={props.project.completed}
                editProject={props.editProject}
                deleteProject={props.deleteProject}
                projectActions={props.projectActions}
                singleProject={true}
            />
        </>
    );
}

ProjectContainer.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        completed: PropTypes.bool
    }).isRequired,
    projectActions: PropTypes.array.isRequired,
    editProject: PropTypes.func.isRequired,
    deleteProject: PropTypes.func.isRequired
}

export default ProjectContainer;