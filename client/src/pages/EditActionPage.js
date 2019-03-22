import React from 'react';
import EditAction from '../containers/EditAction';

export default (props) => {
    return (
        <>
            <EditAction actionID={Number(props.match.params.id)} />
        </>
    );
}