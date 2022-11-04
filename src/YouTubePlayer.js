import { useContext, useState } from "react";
import YouTube from "react-youtube";
import { AppContext } from "./App";
import {data} from './data';

export default function YouTubePlayer(props) {

    const {active, setActive} = useContext(AppContext);
    const randomNum = Math.floor(Math.random() * data.length);

    let vid = props.vid;
    let videoCode;
    let url = vid;
    videoCode = url.split('embed/')[1].split('?')[0];

    const opts = {
        width: '300',
        height: '300',
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
              setActive(data[randomNum].tracks[randomNum]);
            }}
        />
    </>
};