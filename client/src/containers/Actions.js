import React from 'react';
import Action from '../components/Action'
import PropTypes from 'prop-types';
import {
    StyledLink
} from '../styles';


const Actions = (props) => {
    return (
        <>
            {props.actions.map((action, i) =>
                <StyledLink
                    to={`/actions/${action.id}`}
                    key={action.id}
                >
                    <Action
                        key={i}
                        id={action.id}
                        description={action.description}
                        notes={action.notes}
                        completed={action.completed}
                        project_id={action.project_id}
                        project={props.projects.filter(project => project.id===action.project_id)[0]}
                        singleAction={false}
                    />
                </StyledLink>
            )}
        </>
    );
}

Actions.propTypes = {
    actions: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired
}

export default Actions;