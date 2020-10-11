import { combineReducers } from "redux";
import { ADD_MOVIES_LIST } from "./actions";
const DEFAULT_STATE = {};

const moviesList = (state = [], action) => {
    if (action.type === ADD_MOVIES_LIST) {
        return [...state, action.payload];
    }
    return state;
};

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default combineReducers({ rootReducer, moviesList });
