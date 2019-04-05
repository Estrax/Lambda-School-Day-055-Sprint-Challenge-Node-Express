import React from 'react';
import Project from '../components/Project'
import PropTypes from 'prop-types';
import {
    StyledLink
} from '../styles';


const Projects = (props) => {
    return (
        <>
            {props.projects.map((project, i) => 
                <StyledLink
                    to={`/projects/${project.id}`}
                    key={project.id}
                >
                    <Project
                        key={i}
                        name={project.name}
                        completed={project.completed}
                        singleProject={false}
                    />
                </StyledLink>
            )}
        </>
    );
}

Projects.propTypes = {
    projects: PropTypes.array.isRequired
}

export default Projects;