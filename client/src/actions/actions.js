import {
    ACTIONS_FETCH_REQUEST,
    ACTIONS_FETCH_SUCCESS,
    ACTIONS_FETCH_FAILURE,
    ACTION_FETCH_REQUEST,
    ACTION_FETCH_SUCCESS,
    ACTION_FETCH_FAILURE,
    ACTION_ADD_REQUEST,
    ACTION_ADD_SUCCESS,
    ACTION_ADD_FAILURE,
    ACTION_UPDATE_REQUEST,
    ACTION_UPDATE_SUCCESS,
    ACTION_UPDATE_FAILURE,
    ACTION_DELETE_REQUEST,
    ACTION_DELETE_SUCCESS,
    ACTION_DELETE_FAILURE
} from '../constants/actionTypes';
import axios from 'axios';
import { API_URL } from '../constants/config';
import { history } from '../';

export function fetchActions(){
    return async dispatch => {
        try {
            dispatch(requestFetch())
            const actions = await axios.get(API_URL+`/actions/`);
            if(actions.status === 200){
                return dispatch(receiveFetch(actions.data));
            }else{
                dispatch(errorFetch(actions.data.error));
                return Promise.reject(actions.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestFetch(){
        return {
            type: ACTIONS_FETCH_REQUEST,
        }
    }

    function receiveFetch(actions){
        return {
            type: ACTIONS_FETCH_SUCCESS,
            payload: actions
        }
    }

    function errorFetch(err){
        return {
            type: ACTIONS_FETCH_FAILURE,
            payload: err
        }
    }
}

export function fetchAction(id){
    return async dispatch => {
        try {
            dispatch(requestFetch(id));
            const action = await axios.get(API_URL+`/actions/${id}`);
            if(action.status === 200){
                return dispatch(receiveFetch(action.data));
            }else{
                dispatch(errorFetch(action.data.error));
                return Promise.reject(action.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestFetch(id){
        return {
            type: ACTION_FETCH_REQUEST,
            payload: id
        }
    }

    function receiveFetch(action){
        return {
            type: ACTION_FETCH_SUCCESS,
            payload: action
        }
    }

    function errorFetch(err){
        return {
            type: ACTION_FETCH_FAILURE,
            payload: err
        }
    }
}

export function addAction(action){
    return async dispatch => {
        try {
            dispatch(requestAdd(action));
            const newAction = await axios.post(API_URL+`/actions/`, action);
            if(newAction.status === 201){
                dispatch(receiveAdd(newAction.data));
                return history.push(`/actions/${newAction.data.id}`);
            }else{
                dispatch(errorAdd(newAction.data.error));
                return Promise.reject(newAction.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestAdd(action){
        return {
            type: ACTION_ADD_REQUEST,
            payload: action
        }
    }

    function receiveAdd(action){
        return {
            type: ACTION_ADD_SUCCESS,
            payload: action
        }
    }

    function errorAdd(err){
        return {
            type: ACTION_ADD_FAILURE,
            payload: err
        }
    }
}


export function updateAction(action){
    return async dispatch => {
        try {
            dispatch(requestUpdate(action));
            const updatedAction = await axios.put(API_URL+`/actions/${action.id}`, action);
            if(updatedAction.status === 200){
                dispatch(receiveUpdate(updatedAction.data));
                return history.push(`/actions/${action.id}`);
            }else{
                dispatch(errorUpdate(updatedAction.data.error));
                return Promise.reject(updatedAction.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestUpdate(action){
        return {
            type: ACTION_UPDATE_REQUEST,
            payload: action
        }
    }

    function receiveUpdate(id){
        return {
            type: ACTION_UPDATE_SUCCESS,
            payload: id
        }
    }

    function errorUpdate(err){
        return {
            type: ACTION_UPDATE_FAILURE,
            payload: err
        }
    }
}

export function deleteAction(id){
    return async dispatch => {
        try {
            dispatch(requestDelete(id));
            const deletedAction = await axios.delete(API_URL+`/actions/${id}`);
            if(deletedAction.status === 200){
                dispatch(receiveDelete(id));;
                return history.push('/');
            }else{
                dispatch(errorDelete(deletedAction.data.error));
                return Promise.reject(deletedAction.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestDelete(id){
        return {
            type: ACTION_DELETE_REQUEST,
            payload: id
        }
    }

    function receiveDelete(id){
        return {
            type: ACTION_DELETE_SUCCESS,
            payload: id
        }
    }

    function errorDelete(err){
        return {
            type: ACTION_DELETE_FAILURE,
            payload: err
        }
    }
}
