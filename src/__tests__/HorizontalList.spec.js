import React from "react";
import { shallow } from "enzyme";
import HorizontalList from "../components/HorizontalList";

test("HorizontalList renders correctly", () => {
    const component = shallow(<HorizontalList />);
    expect(component).toMatchSnapshot();
});
