import React from "react";
import { shallow } from "enzyme";
import Button from "./../components/Button";

describe("Button", () => {
    it("renders correctly", () => {
        const onClick = jest.fn(),
            show = true,
            prev = true;
        const component = shallow(
            <Button onClick={onClick} show={show} prev={prev} />
        );
        expect(component).toMatchSnapshot();
    });
    it("invokes callback on click", () => {
        const onClick = jest.fn(),
            show = true,
            prev = true;
        const component = shallow(
            <Button onClick={onClick} show={show} prev={prev} />
        );
        component.simulate("click");
        expect(component.find('[data-testid="button"]').length).toEqual(1);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
