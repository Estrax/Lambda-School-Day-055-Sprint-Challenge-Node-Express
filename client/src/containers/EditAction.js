import React from 'react';
import ActionForm from '../components/ActionForm';
import PropTypes from 'prop-types';

const EditAction = (props) => {
    return (
        <>
            <ActionForm addForm={false} actionID={props.actionID} />
        </>
    );
}

EditAction.propTypes = {
    actionID: PropTypes.number.isRequired
}

export default EditAction;