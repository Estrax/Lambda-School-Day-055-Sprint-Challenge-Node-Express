import React from 'react';
import Action from '../components/Action';
import PropTypes from 'prop-types';

const ActionContainer = (props) => {
    return (
        <>
            <Action
                key={props.action.id}
                id={props.action.id}
                description={props.action.description}
                notes={props.action.notes}
                completed={props.action.completed}
                project_id={props.action.project_id}
                project={props.projects.length > 0 ? props.projects.filter(project => project.id===props.action.project_id)[0] ? props.projects.filter(project => project.id===props.action.project_id)[0] : {id: -1, name: ''} : {id: -1, name: ''}}
                editAction={props.editAction}
                deleteAction={props.deleteAction}
                singleAction={true}
            />
        </>
    );
}

ActionContainer.propTypes = {
    action: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        notes: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        project_id: PropTypes.number.isRequired
    }).isRequired,
    projects: PropTypes.array.isRequired,
    editAction: PropTypes.func.isRequired,
    deleteAction: PropTypes.func.isRequired
}

export default ActionContainer;