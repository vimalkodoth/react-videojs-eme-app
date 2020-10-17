import React from "react";
import renderer from "react-test-renderer";
import HorizontalList from "../components/HorizontalList";

test("HorizontalList renders correctly", () => {
    const component = renderer.create(<HorizontalList />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
