import { ADD_MOVIES_LIST, ADD_MOVIES_DETAIL } from "./actions";
import config from "./config.json";
import apiClient from "./utils/apiClient";

export function addMoviesList(list) {
    return { type: ADD_MOVIES_LIST, payload: list };
}

export function addMoviesDetail(detail) {
    return { type: ADD_MOVIES_DETAIL, payload: detail };
}

export function fetchMovieDetail(id) {
    return async (dispatch) => {
        try {
            let { movie: source = "" } = config.home.list.endpoints || {};
            source = source.replace("{id}", id);
            const response = await apiClient.call(source);
            dispatch(addMoviesDetail(response.data));
        } catch (e) {
            console.log(e);
        }
    };
}

export function fetchMoviesList() {
    const {
        list: { ids, endpoints }
    } = config.home;

    return async (dispatch) => {
        try {
            const reqs = ids.map((id) => {
                const source = endpoints.list.replace("{id}", id);
                return apiClient.call(source);
            });
            const responses = await Promise.all(reqs);
            responses.forEach((res)=> dispatch(addMoviesList(res.data)));
        } catch (e) {
            console.log(e);
        }
    };
}
