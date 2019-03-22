import {
    ERROR,
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

const initialState = {
    projects: [],
    project: null,
    projectActions: [],
    isFetching: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case PROJECTS_FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        
        case PROJECTS_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                projects: action.payload
            }
        
        case PROJECTS_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        
        case PROJECT_FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        
        case PROJECT_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                project: action.payload
            }
        
        case PROJECT_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        
        case PROJECT_ADD_REQUEST:
            return {
                ...state
            }
        
        case PROJECT_ADD_SUCCESS:
            return {
                ...state,
                project: action.payload
            }
        
        case PROJECT_ADD_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case PROJECT_UPDATE_REQUEST:
            return {
                ...state
            }
        
        case PROJECT_UPDATE_SUCCESS:
            return {
                ...state
            }
        
        case PROJECT_UPDATE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        
        case PROJECT_DELETE_REQUEST:
            return {
                ...state
            }
        
        case PROJECT_DELETE_SUCCESS:
            return {
                ...state,
                project: null
            }
        
        case PROJECT_DELETE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        
        case PROJECT_FETCH_ACTIONS_REQUEST:
            return {
                ...state
            }
        
        case PROJECT_FETCH_ACTIONS_SUCCESS:
            return {
                ...state,
                projectActions: action.payload
            }
        
        case PROJECT_FETCH_ACTIONS_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case ERROR:
            return {
                ...state,
                err: action.payload
            }

        default:
            return state;
    }
}
