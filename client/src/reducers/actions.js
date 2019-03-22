import {
    ERROR,
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

const initialState = {
    actions: [],
    action: null,
    isFetching: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case ACTIONS_FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        
        case ACTIONS_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                actions: action.payload
            }
        
        case ACTIONS_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        
        case ACTION_FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        
        case ACTION_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                action: action.payload
            }
        
        case ACTION_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        
        case ACTION_ADD_REQUEST:
            return {
                ...state
            }
        
        case ACTION_ADD_SUCCESS:
            return {
                ...state,
                action: action.payload
            }
        
        case ACTION_ADD_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case ACTION_UPDATE_REQUEST:
            return {
                ...state
            }
        
        case ACTION_UPDATE_SUCCESS:
            return {
                ...state
            }
        
        case ACTION_UPDATE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        
        case ACTION_DELETE_REQUEST:
            return {
                ...state
            }
        
        case ACTION_DELETE_SUCCESS:
            return {
                ...state,
                action: null
            }
        
        case ACTION_DELETE_FAILURE:
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
