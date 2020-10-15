import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { css } from "@emotion/core";
import { Home, Details, Trailer } from "./components/pages";
import store from "./store";
import "normalize.css";
import "./styles.scss";

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="app" css={AppStyles}>
                    <div className="contents" css={ContentsStyle}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/details/:id" component={Details} />
                            <Route path="/trailer" component={Trailer} />
                        </Switch>
                    </div>
                </div>
            </Provider>
        </BrowserRouter>
    );
};

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

render(<App />, document.querySelector("#container"));
