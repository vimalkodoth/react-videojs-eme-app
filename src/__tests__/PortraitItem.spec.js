import React from "react";
import { shallow } from "enzyme";
import PortraitItem from "../components/PortraitItem";
import list from "./json/list.json";
import { Link } from "react-router-dom";
import Image from "../components/Image";

test("PortraitItem renders correctly", () => {
    const movieItem = list.data.contents.data[0];
    const component = shallow(
        <PortraitItem
            key={movieItem.id}
            item={movieItem}
            to={{
                pathname: `/details/${movieItem.id}`,
                state: { from: location.pathname }
            }}
        ></PortraitItem>
    );
    expect(component).toMatchSnapshot();
});

test("PortraitItem renders Image inside Link Item", () => {
    const movieItem = list.data.contents.data[0];
    const component = shallow(
        <PortraitItem
            key={movieItem.id}
            item={movieItem}
            to={{
                pathname: `/details/${movieItem.id}`,
                state: { from: location.pathname }
            }}
        ></PortraitItem>
    );
    expect(component.find(Link).length).toEqual(1);
    expect(component.find(Link).find(Image).length).toEqual(1);
});
