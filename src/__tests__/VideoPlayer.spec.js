import React from "react";
import { render, shallow, mount } from "enzyme";
import VideoPlayer from "./../components/VideoPlayer";

const videoJsOptions = {
    src:
        "https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd",
    autoplay: true,
    controls: true,
    type: "application/dash+xml",
    keySystems: {
        "com.widevine.alpha": "https://widevine-proxy.appspot.com/proxy"
    }
};

describe("VideoPlayer", () => {
    xit("renders correctly", () => {
        const component = render(<VideoPlayer {...videoJsOptions} />);
        expect(component).toMatchSnapshot();
    });
    it("renders a video element", () => {
        const component = render(<VideoPlayer {...videoJsOptions} />);
        expect(component.find("video").length).toEqual(1);
    });
    it("renders video element in fullscreen", () => {
        const component = render(<VideoPlayer {...videoJsOptions} />);
        expect(component.find(".video-js.full").length).toEqual(1);
    });
});
