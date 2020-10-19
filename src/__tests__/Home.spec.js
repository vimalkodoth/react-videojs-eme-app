import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Home from "./../components/pages/Home";
import list from "./json/list.json";

jest.mock("../utils/apiClient", () => jest.fn());

let store;
const mockStore = configureStore([]);
const originalConsoleError = console.error;

describe("Home", () => {
    beforeEach(() => {
        console.error = jest.fn();
        store = mockStore({
            moviesList: [list.data]
        });
    });

    afterEach(() => {
        console.error = originalConsoleError;
        store = mockStore({});
    });

    it("renders correctly", () => {
        const component = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
});
