import React, { Component } from "react";
import VideoPlayer from "./../VideoPlayer";
import Button from "./../Button";
import withBackButton from "./../hocs/withBackButton";

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

class Trailer extends Component {
    goBack = (e) => {
        this.props.onBackButtonClicked(e);
    };
    render() {
        return (
            <React.Fragment>
                <Button onClick={this.goBack} show={true} prev={true} />
                <VideoPlayer {...videoJsOptions} />;
            </React.Fragment>
        );
    }
}

export default withBackButton(Trailer);
