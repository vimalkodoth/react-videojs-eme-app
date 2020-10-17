import { combineReducers } from "redux";
import {
    ADD_MOVIES_LIST,
    CLEAR_MOVIES_LIST,
    ADD_MOVIES_DETAIL
} from "./actions";
const DEFAULT_STATE = {};

const moviesList = (state = [], action) => {
    if (action.type === ADD_MOVIES_LIST) {
        return [...state, action.payload];
    }
    return state;
};

const movieDetails = (state = {}, action) => {
    if (action.type === ADD_MOVIES_DETAIL) {
        return Object.assign({}, state, {
            [action.payload.id]: action.payload
        });
    }
    return state;
};

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default combineReducers({ rootReducer, moviesList, movieDetails });
