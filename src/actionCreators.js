import { ADD_MOVIES_LIST } from "./actions";
import config from "./config.json";
import apiClient from "./utils/apiClient";

export function addMoviesList(list) {
    return { type: ADD_MOVIES_LIST, payload: list };
}

export function fetchMoviesList() {
    const {
        list: { ids, endpoints }
    } = config.home;

    console.log(ids, endpoints);

    return async (dispatch) => {
        try {
            const promises = ids.map((id) => {
                const source = endpoints.list.replace("{id}", id);
                return apiClient.call(source);
            });

            for (let p of promises) {
                const response = await p;
                if (response) {
                    dispatch(addMoviesList(response.data));
                }
            }
        } catch (e) {
            console.log(e);
        }
    };
}
