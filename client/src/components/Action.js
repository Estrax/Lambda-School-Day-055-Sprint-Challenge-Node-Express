import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
    Card,
    Contents,
    Buttons,
    ButtonHalf,
    cardBorder,
    CardSingle,
    ActionTitle
} from '../styles';

const Action = (props) => {
    return (
        <>
        {props.singleAction && <Card className="card" style={cardBorder}>
            <ActionTitle>{props.description}</ActionTitle>
            <Contents>{props.notes}</Contents>
            <Contents>Completed: {String(props.completed)}</Contents>
            <Contents><Link to={`/projects/${props.project.id}`}>{props.project.name}</Link></Contents>
            {props.singleAction &&
            <Buttons>
                <ButtonHalf onClick={props.editAction} className="btn btn-primary">EDIT</ButtonHalf>
                <ButtonHalf onClick={props.deleteAction} className="btn btn-danger">DELETE</ButtonHalf>
            </Buttons>}
        </Card>}

        {!props.singleAction && <CardSingle className="card" style={cardBorder}>
            <ActionTitle>{props.description}</ActionTitle>
            {props.completed && <Contents>(Already completed)</Contents>}
            <Contents>{props.project.name}</Contents>
        </CardSingle>}
        </>
    );
}


Action.propTypes = {
    editAction: PropTypes.func,
    deleteAction: PropTypes.func,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    project_id: PropTypes.number,
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }),
    singleAction: PropTypes.bool.isRequired
}

export default Action;