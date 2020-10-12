import React from "react";
import VideoPlayer from "./../VideoPlayer";

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

const Trailer = () => {
    return <VideoPlayer {...videoJsOptions} />;
};

export default Trailer;
