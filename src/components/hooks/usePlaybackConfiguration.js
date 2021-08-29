import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';

function usePlaybackConfiguration(playerConfig = {}) {
    const playerState =  useSelector(state => state.playerState);
    const [opts, setOpts] = useState(null);
    useEffect(() => {
        const {seekPosition, currentTime} = playerState;
        if(seekPosition && currentTime){
            let now = Date.now(),
                diff = now - currentTime;
            setOpts((state) => {
                return {
                    ...playerConfig,
                    playerVars: {
                        ...playerConfig.playerVars,
                        start: Math.floor(seekPosition + ( diff / 1000))
                    }
                }
            });
        } else {
            setOpts(playerConfig);
        }
    }, []);

    return opts;
}

export default usePlaybackConfiguration;