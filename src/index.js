import React from "react";
import { render } from "react-dom";
import App from "./App";
import "normalize.css";
import "./styles.scss";

const renderApp = () => render(<App />, document.querySelector("#container"));

renderApp();

if (module.hot) {
    module.hot.accept("./App", () => {
        renderApp();
    });
}
