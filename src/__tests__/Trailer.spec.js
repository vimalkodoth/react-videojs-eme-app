import React from "react";
import { shallow } from "enzyme";
import { UnWrappedTrailer } from "./../components/pages/Trailer";
import Button from "./../components/Button";
import VideoPlayer from "./../components/VideoPlayer";

describe("Trailer", () => {
    it("renders a videoplayer and button correctly", () => {
        const component = shallow(<UnWrappedTrailer />);
        expect(component).toMatchSnapshot();
        expect(component.find(VideoPlayer).length).toEqual(1);
        expect(component.find(Button).length).toEqual(1);
    });
});
