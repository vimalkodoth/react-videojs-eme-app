import React from "react";
import { render } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Details from "../components/pages/Details";
import detailsItem from "./json/details-item.json";
let store;
const mockStore = configureStore([]);
const originalConsoleError = console.error;
describe("Details", () => {
    beforeEach(() => {
        console.error = jest.fn();
        store = mockStore({
            movieDetails: {
                "el-avion-del-dinero": detailsItem
            }
        });
    });

    afterEach(() => {
        console.error = originalConsoleError;
        store = mockStore({});
    });

    it("renders correctly", () => {
        store.dispatch = jest.fn();
        const component = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Details
                        match={{
                            params: { id: "el-avion-del-dinero" },
                            isExact: true,
                            path: "",
                            url: ""
                        }}
                    />
                </MemoryRouter>
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

    it("renders back button", () => {
        store.dispatch = jest.fn();
        const component = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Details
                        match={{
                            params: { id: "el-avion-del-dinero" },
                            isExact: true,
                            path: "",
                            url: ""
                        }}
                    />
                </MemoryRouter>
            </Provider>
        );
        expect(component.find('[data-testid="button"]')).toBeTruthy();
        expect(component.find('a[href="/trailer"]')).toBeTruthy();
        expect(
            component.find('[data-testid="header-meta"] .title').text()
        ).toEqual("El Avión del Dinero");
    });
});
