import React from "react";
import { render, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import MoviesList from "./../components/MoviesList";
import list from "./json/list.json";
const mockStore = configureStore([]);
describe("MoviesList", () => {
    let store;
    const originalConsoleError = console.error;
    beforeEach(() => {
        console.error = jest.fn();
    });

    afterEach(() => {
        console.error = originalConsoleError;
        store = mockStore({});
    });

    it("renders correctly", () => {
        const childCount = 3;
        store = mockStore({
            moviesList: [list.data]
        });
        const component = render(
            <Provider store={store}>
                <MemoryRouter>
                    <MoviesList />
                </MemoryRouter>
            </Provider>
        );
        expect(component).toMatchSnapshot();
        expect(component.find('[data-testid="h-list"]').length).toEqual(1);
        expect(
            component.find('[data-testid="h-list"]').children().length
        ).toEqual(childCount);
    });

    it("calls dispatch on mount", () => {
        store.dispatch = jest.fn();
        const component = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <MoviesList />
                </MemoryRouter>
            </Provider>
        );
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});
