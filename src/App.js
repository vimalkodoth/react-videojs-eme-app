import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { css } from "@emotion/core";
import store from "./store";
import AsyncRouteWithErrorBoundary from "./components/AsyncRouteWithErrorBoundary";
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <div className="app" css={AppStyles}>
                        <div className="contents" css={ContentsStyle}>
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={(props) => (
                                        <AsyncRouteWithErrorBoundary
                                            props={props}
                                            loadingPromise={import(
                                                "./components/pages/Home"
                                            )}
                                        />
                                    )}
                                />
                                <Route
                                    path="/details/:id"
                                    component={(props) => (
                                        <AsyncRouteWithErrorBoundary
                                            props={props}
                                            loadingPromise={import(
                                                "./components/pages/Details"
                                            )}
                                        />
                                    )}
                                />
                                <Route
                                    path="/trailer"
                                    component={(props) => (
                                        <AsyncRouteWithErrorBoundary
                                            props={props}
                                            loadingPromise={import(
                                                "./components/pages/Trailer"
                                            )}
                                        />
                                    )}
                                />
                            </Switch>
                        </div>
                    </div>
                </Provider>
            </BrowserRouter>
        );
    }
}
const AppStyles = css`
    margin: 0px auto;
    @media (min-width: 1680px) {
        max-width: 1680px;
    }
`;
const ContentsStyle = css`
    display: flex;
    flex-direction: column;
    background-color: #171717;
    color: #fff;
    min-height: 100%;
    min-height: 100vh;
`;

export default hot(App);
