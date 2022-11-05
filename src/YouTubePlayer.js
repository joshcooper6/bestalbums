import { useContext, useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import { AppContext } from "./App";
import {data} from './data';

export default function YouTubePlayer(props) {

    const {active, setActive, playerStatus, setPlayerStatus} = useContext(AppContext);

    const ref = useRef();

    let vid = props.vid;
    let videoCode;
    let url = vid;
    videoCode = url.split('embed/')[1].split('?')[0];

    const opts = {
        width: '175',
        height: '175',
        playerVars: {
          autoplay: 1,
        }
    };

    useEffect(() => {
        console.log(playerStatus)
    }, [playerStatus])

return <>
        <YouTube
            ref={ref}
            className="self-center pb-4"
            onReady={(e) => e.target.playVideo()}
            onPause={() => setPlayerStatus('paused')}
            videoId={videoCode}
            containerClassName="embed embed-youtube"
            opts={opts}
            onPlay={(e) => {
                setPlayerStatus('playing')
            }}
            onEnd={() => {
                setPlayerStatus('stopped')
                const randomNum = Math.floor(Math.random() * data.length);
                const randomNum2 = Math.floor(Math.random() * data[randomNum].tracks.length);
                const tgt = data[randomNum]
                const track = tgt.tracks[randomNum2]
              setActive({
                album: tgt.title,
                artist: tgt.artist,
                title: track.title,
                path: track.path,
                cover: tgt.cover
            })
            }}
        />
    </>
};