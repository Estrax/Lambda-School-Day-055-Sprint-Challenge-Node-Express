import {
    PROJECTS_FETCH_REQUEST,
    PROJECTS_FETCH_SUCCESS,
    PROJECTS_FETCH_FAILURE,
    PROJECT_FETCH_REQUEST,
    PROJECT_FETCH_SUCCESS,
    PROJECT_FETCH_FAILURE,
    PROJECT_ADD_REQUEST,
    PROJECT_ADD_SUCCESS,
    PROJECT_ADD_FAILURE,
    PROJECT_UPDATE_REQUEST,
    PROJECT_UPDATE_SUCCESS,
    PROJECT_UPDATE_FAILURE,
    PROJECT_DELETE_REQUEST,
    PROJECT_DELETE_SUCCESS,
    PROJECT_DELETE_FAILURE,
    PROJECT_FETCH_ACTIONS_REQUEST,
    PROJECT_FETCH_ACTIONS_SUCCESS,
    PROJECT_FETCH_ACTIONS_FAILURE
} from '../constants/actionTypes';
import axios from 'axios';
import { API_URL } from '../constants/config';
import { history } from '../';

export function fetchProjects(){
    return async dispatch => {
        try {
            dispatch(requestFetch())
            const projects = await axios.get(API_URL+`/projects/`);
            if(projects.status === 200){
                return dispatch(receiveFetch(projects.data));
            }else{
                dispatch(errorFetch(projects.data.error));
                return Promise.reject(projects.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestFetch(){
        return {
            type: PROJECTS_FETCH_REQUEST,
        }
    }

    function receiveFetch(projects){
        return {
            type: PROJECTS_FETCH_SUCCESS,
            payload: projects
        }
    }

    function errorFetch(err){
        return {
            type: PROJECTS_FETCH_FAILURE,
            payload: err
        }
    }
}

export function fetchProject(id){
    return async dispatch => {
        try {
            dispatch(requestFetch(id));
            const project = await axios.get(API_URL+`/projects/${id}`);
            if(project.status === 200){
                return dispatch(receiveFetch(project.data));
            }else{
                dispatch(errorFetch(project.data.error));
                return Promise.reject(project.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestFetch(id){
        return {
            type: PROJECT_FETCH_REQUEST,
            payload: id
        }
    }

    function receiveFetch(project){
        return {
            type: PROJECT_FETCH_SUCCESS,
            payload: project
        }
    }

    function errorFetch(err){
        return {
            type: PROJECT_FETCH_FAILURE,
            payload: err
        }
    }
}

export function addProject(project){
    return async dispatch => {
        try {
            dispatch(requestAdd(project));
            const newProject = await axios.post(API_URL+`/projects/`, project);
            if(newProject.status === 201){
                dispatch(receiveAdd(newProject.data));
                return history.push(`/projects/${newProject.data.id}`);
            }else{
                dispatch(errorAdd(newProject.data.error));
                return Promise.reject(newProject.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestAdd(project){
        return {
            type: PROJECT_ADD_REQUEST,
            payload: project
        }
    }

    function receiveAdd(project){
        return {
            type: PROJECT_ADD_SUCCESS,
            payload: project
        }
    }

    function errorAdd(err){
        return {
            type: PROJECT_ADD_FAILURE,
            payload: err
        }
    }
}


export function updateProject(project){
    return async dispatch => {
        try {
            dispatch(requestUpdate(project));
            const updatedProject = await axios.put(API_URL+`/projects/${project.id}`, {name: project.name, description: project.description, completed: project.completed});
            if(updatedProject.status === 200){
                dispatch(receiveUpdate(updatedProject.data));
                return history.push(`/projects/${project.id}`);
            }else{
                dispatch(errorUpdate(updatedProject.data.error));
                return Promise.reject(updatedProject.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestUpdate(project){
        return {
            type: PROJECT_UPDATE_REQUEST,
            payload: project
        }
    }

    function receiveUpdate(project){
        return {
            type: PROJECT_UPDATE_SUCCESS,
            payload: project
        }
    }

    function errorUpdate(err){
        return {
            type: PROJECT_UPDATE_FAILURE,
            payload: err
        }
    }
}

export function deleteProject(id){
    return async dispatch => {
        try {
            dispatch(requestDelete(id));
            const deletedProject = await axios.delete(API_URL+`/projects/${id}`);
            if(deletedProject.status === 200){
                dispatch(receiveDelete(id));
                return history.push('/projects/');
            }else{
                dispatch(errorDelete(deletedProject.data.error));
                return Promise.reject(deletedProject.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestDelete(id){
        return {
            type: PROJECT_DELETE_REQUEST,
            payload: id
        }
    }

    function receiveDelete(id){
        return {
            type: PROJECT_DELETE_SUCCESS,
            payload: id
        }
    }

    function errorDelete(err){
        return {
            type: PROJECT_DELETE_FAILURE,
            payload: err
        }
    }
}


export function fetchProjectActions(id){
    return async dispatch => {
        try {
            dispatch(requestFetchActions(id));
            const actions = await axios.get(API_URL+`/projects/${id}/actions`);
            if(actions.status === 200){
                return dispatch(receiveFetchActions(actions.data));
            }else{
                dispatch(errorFetchActions(actions.data.error));
                return Promise.reject(actions.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestFetchActions(id){
        return {
            type: PROJECT_FETCH_ACTIONS_REQUEST,
            payload: id
        }
    }

    function receiveFetchActions(actions){
        return {
            type: PROJECT_FETCH_ACTIONS_SUCCESS,
            payload: actions
        }
    }

    function errorFetchActions(err){
        return {
            type: PROJECT_FETCH_ACTIONS_FAILURE,
            payload: err
        }
    }
}
