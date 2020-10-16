import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f
    )
);

if (module.hot) {
    module.hot.accept("./reducers", function () {
        const reducer = require("./reducers");
        store.replaceReducer(reducer);
    });
}

export default store;
