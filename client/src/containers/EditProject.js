import React from 'react';
import ProjectForm from '../components/ProjectForm';
import PropTypes from 'prop-types';

const EditProject = (props) => {
    return (
        <>
            <ProjectForm addForm={false} projectID={props.projectID} />
        </>
    );
}

EditProject.propTypes = {
    projectID: PropTypes.number.isRequired
}

export default EditProject;