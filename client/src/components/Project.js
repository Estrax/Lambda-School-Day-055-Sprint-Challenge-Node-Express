import React from 'react';
import PropTypes from 'prop-types';

import {
    Card,
    Title,
    Contents,
    Completed,
    Buttons,
    ButtonHalf,
    cardBorder,
    CardSingle,
    StyledLink
} from '../styles';
import Action from './Action';

const Project = (props) => {
    return (
        <>
        {props.singleProject && <Card className="card" style={cardBorder}>
            <Title>{props.name}</Title>
            <Contents>{props.description}</Contents>
            <Completed>Completed: {String(props.completed)}</Completed>

            {props.singleProject &&
            <Buttons>
                <ButtonHalf onClick={props.editProject} className="btn btn-primary">EDIT</ButtonHalf>
                <ButtonHalf onClick={props.deleteProject} className="btn btn-danger">DELETE</ButtonHalf>
            </Buttons>}
        </Card>}
        {props.singleProject && props.projectActions &&
            props.projectActions.map(action => 
                <StyledLink key={action.id} to={`/actions/${action.id}`}>
                    <Action key={action.id} id={action.id} description={action.description} notes={action.notes} completed={action.completed} project_id={action.project_id} project={{id: props.id, name: ''}} singleAction={false} />
                </StyledLink>
                )
        }

        {!props.singleProject && <CardSingle className="card" style={cardBorder}>
            <Title>{props.name} {props.completed && "(completed)"}</Title>
        </CardSingle>}
        </>
    );
}


Project.propTypes = {
    editProject: PropTypes.func,
    deleteProject: PropTypes.func,
    projectActions: PropTypes.array,
    name: PropTypes.string.isRequired,
    singleProject: PropTypes.bool.isRequired
}

export default Project;