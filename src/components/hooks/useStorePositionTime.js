import React, {useRef, useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {setPlayerState} from './../../actionCreators';

function useStorePositionTime(playerRef) {
    const [firstTimePlay,setFirstTimePlay] = useState(false);
    const interval = useRef();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(!firstTimePlay) return;
        interval.current = setInterval(() => {
            updateTime();
        }, 3000);
        return () => {
            clearInterval(interval.current);
        };
    },[firstTimePlay]);

    const onPlay = () => {
        setFirstTimePlay(state => {
            if(!state) {
                return true;
            }
            return state;
        });
    }

    const onStop = () => {
        setFirstTimePlay(state => {
            return false;
        });
        clearInterval(interval.current);
    }

    const onPlayerStateChange = (event) => {
        const playerState = event.data;
        switch(playerState){
            case 1:
                onPlay();
                break;
            case 0:
                onStop();
            default:
        }
    }

    const updateTime = async () => {
        const currentTime = await playerRef.current.internalPlayer.getCurrentTime();
        dispatch(setPlayerState({
            seekPosition: currentTime,
            currentTime: Date.now()
        }));
    }

    return [onPlayerStateChange]
}

export default useStorePositionTime;