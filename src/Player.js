import { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "./App";
import ff from './assets/ff.svg';
import styled from "styled-components";
import YouTubePlayer from "./YouTubePlayer.js";

const Footer = styled.div`
    background-image: url(${props => props.bg.cover});
    background-position: center;
    background-size: cover;

    position: fixed;
    bottom: 0;
`;


export default function Play(){

    const { active, setActive, data } = useContext(AppContext);
    const [clicked, setClicked] = useState(false);
    const [runAnim, setRunAnim] = useState(false);

    useEffect(() => { setRunAnim(true) }, [active]);

    const changeSong = () => {
        const randomNum = Math.floor(Math.random() * data.length);
        const randomNum2 = Math.floor(Math.random() * data[randomNum].tracks.length);
        const tgt = data[randomNum];
        const track = tgt.tracks[randomNum2];
      setActive({
        album: tgt.title,
        artist: tgt.artist,
        title: track.title,
        path: track.path,
        cover: tgt.cover
    })
    };

    return<>
        <Footer bg={active} onAnimationEnd={() => {setRunAnim(false)}} onClick={() => setClicked(prev => !prev)} className={`w-11/12 max-w-lg ${!clicked ? 'max-h-[80px]' : 'max-h-[450px]'} transition_ease ${(runAnim && !clicked) && 'bounce'} backdrop-blur-3xl right-0 cursor-grab fixed bottom-0  drop-shadow-2xl overflow-hidden min-h-[100px] z-0 rounded-tl-3xl flex flex-col`}>
            <div className="backdrop-blur-lg bg-black bg-opacity-70 w-full flex flex-col">

                {/* <img onClick={(e) => {e.preventDefault(); changeSong();}} src={ff} className={'invert opacity-50 cursor-pointer hover:opacity-90'} /> */}

                <div className="flex justify-between w-10/12 pr-4 self-center overflow-hidden pl-4 mb-4">
                        <h1 className={`${clicked && 'hidden'} marquee lg:p-4 p-6 opacity-70 lg:text-6xl text-5xl self-center font-thin text-white w-max`}>
                            <b>{active.title}</b> {active.artist}
                        </h1>
                </div>

                <div className="flex justify-center items-center gap-4 mb-4 self-center">
                    <YouTubePlayer vid={active.path} />
                    <div className="text-white max-w-[250px] overflow-hidden flex flex-col text-2xl self-center">
                        <p className="marquee font-black m-0 overflow-hidden">{active.title}</p>
                        <p className="text-lg">{active.album}</p>
                        <p className="text-lg font-bold uppercase tracking-widest">{active.artist}</p>
                        <img onClick={(e) => {e.preventDefault(); changeSong();}} src={ff} className={'invert transition_ease cursor-pointer h-[20px] self-start mt-3 opacity-50  hover:opacity-90'} />
                    </div>
                </div>
                
            </div>
        </Footer>
    </>
};