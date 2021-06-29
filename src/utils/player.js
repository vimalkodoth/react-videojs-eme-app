import videojs from "video.js";
import * as eme from "videojs-contrib-eme";
import * as styles from "video.js/dist/video-js.css";

const player = {
    player: null,
    init(node, config, onPlayerReady) {
        this.player = videojs(node, config, onPlayerReady);
        this.player.eme();
        this.player.src(config);
        return this;
    },
    play() {
        this.player && this.player.play();
    },
    destroy() {
        this.player && this.player.dispose();
        this.player = null;
    }
};

export default player;
