import React from "react";
import { shallow } from "enzyme";
import HorizontalList from "../components/HorizontalList";
import PortraitItem from "../components/PortraitItem";
import list from "./json/list.json";

test("HorizontalList renders correctly", () => {
    const component = shallow(
        <HorizontalList>
            {list.data.contents.data.map((movieItem) => {
                return (
                    <PortraitItem
                        key={movieItem.id}
                        item={movieItem}
                        to={{
                            pathname: `/details/${movieItem.id}`,
                            state: { from: location.pathname }
                        }}
                    ></PortraitItem>
                );
            })}
        </HorizontalList>
    );
    expect(component).toMatchSnapshot();
});

test("HorizontalList should render correct amount of shows", () => {
    const component = shallow(
        <HorizontalList>
            {list.data.contents.data.map((movieItem) => {
                return (
                    <PortraitItem
                        key={movieItem.id}
                        item={movieItem}
                        to={{
                            pathname: `/details/${movieItem.id}`,
                            state: { from: location.pathname }
                        }}
                    ></PortraitItem>
                );
            })}
        </HorizontalList>
    );

    expect(component.find(PortraitItem).length).toEqual(
        list.data.contents.data.length
    );
});
