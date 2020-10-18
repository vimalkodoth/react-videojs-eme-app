import React from "react";
import { render, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import MoviesList from "./../components/MoviesList";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { fetchMoviesList } from "../actionCreators";
import list from "./json/list.json";
const mockStore = configureStore([]);
const store = mockStore({
    moviesList: [list.data]
});

describe("MoviesList", () => {
    const originalConsoleError = console.error;
    beforeEach(() => {
        console.error = jest.fn();
    });

    afterEach(() => {
        console.error = originalConsoleError;
    });
    test("MoviesList renders correctly", () => {
        const childCount = 3;
        const component = render(
            <Provider store={store}>
                <MemoryRouter>
                    <MoviesList />
                </MemoryRouter>
            </Provider>
        );
        expect(component).toMatchSnapshot();
        expect(
            component.find('[data-testid="h-list"]').children().length
        ).toEqual(childCount);
    });
});
