import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Details, Trailer } from "./components/pages";
import store from "./store";
import "normalize.css";
import "./styles.scss";

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="app">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/details/:id" component={Details} />
                        <Route path="/trailer" component={Trailer} />
                    </Switch>
                </div>
            </Provider>
        </BrowserRouter>
    );
};

render(<App />, document.querySelector("#container"));
