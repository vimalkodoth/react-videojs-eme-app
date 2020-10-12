import React from "react";
import videojs from "video.js";
import * as eme from "videojs-contrib-eme";
require("video.js/dist/video-js.css");
class VideoPlayer extends React.Component {
    componentDidMount() {
        this.player = videojs(
            this.videoNode,
            this.props,
            function onPlayerReady() {
                console.log("onPlayerReady", this);
            }
        );
        this.player.eme();
        this.player.src(this.props);
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    render() {
        return (
            <div>
                <div data-vjs-player>
                    <video
                        ref={(node) => (this.videoNode = node)}
                        className="video-js"
                    ></video>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;
