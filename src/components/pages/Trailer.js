import React, { Component } from "react";
import VideoPlayer from "./../VideoPlayer";
import Button from "./../Button";
import withBackButton from "./../hocs/withBackButton";
import { func } from "prop-types";

//Config needs to be moved from component
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

/** Trailer Page Component */
class Trailer extends Component {
    static propTypes = {
        onBackButtonClicked: func
    };
    static defaultProps = {
        onBackButtonClicked: (n) => n
    };
    goBack = (e) => {
        this.props.onBackButtonClicked(e);
    };
    render() {
        return (
            <div className="trailer">
                <Button onClick={this.goBack} show={true} prev={true} />
                <VideoPlayer {...videoJsOptions} />;
            </div>
        );
    }
}

export const UnWrappedTrailer = Trailer;

export default withBackButton(Trailer);
