import React from "react";
import { shallow } from "enzyme";
import RoundedButton from "./../components/RoundedButton";
import { Link } from "react-router-dom";
describe("RoundedButton", () => {
    it("renders correctly", () => {
        const title = "Hello world!",
            to = "/link";
        const component = shallow(<RoundedButton title={title} to={to} />);
        expect(component).toMatchSnapshot();
        expect(component.find(Link).length).toEqual(1);
        expect(component.find(Link).prop("to")).toEqual(to);
    });
});
