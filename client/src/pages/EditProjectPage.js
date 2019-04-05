import React from 'react';
import EditProject from '../containers/EditProject';

export default (props) => {
    return (
        <>
            <EditProject projectID={Number(props.match.params.id)} />
        </>
    );
}