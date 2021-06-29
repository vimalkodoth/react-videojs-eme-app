import React from "react";
import { css } from "@emotion/core";
import player from "./../utils/player";

class VideoPlayer extends React.Component {
    player = null;

    componentDidMount() {
        this.player = player.init(
            this.videoNode,
            {
                html5: {
                    nativeCaptions: false
                },
                ...this.props
            },
            () => {
                this.player.play();
            }
        );
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.destroy();
            this.player = null;
        }
    }

    render() {
        return (
            <div>
                <div data-vjs-player>
                    <video
                        ref={(node) => (this.videoNode = node)}
                        className="video-js vjs-theme-rakuten full"
                        css={Player}
                    ></video>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;

const Player = css`
    &.vjs-theme-rakuten {
        max-width: 100%;
        &.full {
            position: absolute;
            left: 0;
            right: 0;
            min-width: 100%;
            height: 100%;
        }
        max-width: 100%;
        min-width: 100%;
        .vjs-big-play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -0.81666em;
            margin-left: -1.5em;
        }
    }
`;
