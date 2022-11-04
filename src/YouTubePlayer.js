import { useContext, useRef, useState } from "react";
import YouTube from "react-youtube";
import { AppContext } from "./App";
import {data} from './data';

export default function YouTubePlayer(props) {

    const {active, setActive} = useContext(AppContext);
    const randomNum = Math.floor(Math.random() * data.length);
    const randomNum2 = Math.floor(Math.random() * data[randomNum].tracks.length);

    let vid = props.vid;
    let videoCode;
    let url = vid;
    videoCode = url.split('embed/')[1].split('?')[0];

    const opts = {
        width: '175',
        height: '175',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    };


    return <>
        <YouTube
            className="self-center pb-4"
            onReady={(e) => e.target.playVideo()}
            videoId={videoCode}
            containerClassName="embed embed-youtube"
            opts={opts}
            onEnd={() => {
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