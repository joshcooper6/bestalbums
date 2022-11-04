import { useContext, useEffect, useState, useRef } from "react"
import { AppContext } from "./App"
import styled from "styled-components";
import YouTubePlayer from "./YouTubePlayer.js";

const Footer = styled.div`
    background-image: url(${props => props.bg.cover});
    background-position: center;
    background-size: cover;
`;


export default function Play(){

    const { active } = useContext(AppContext);
    const [clicked, setClicked] = useState(false);
    const [runAnim, setRunAnim] = useState(false);

    useEffect(() => { setRunAnim(true) }, [active]);

    // let videoCode;
    // let url = active.path;
    // videoCode = url.split('embed/')[1].split('?')[0];

    return<>
        <Footer bg={active} onAnimationEnd={() => {setRunAnim(false)}} onClick={() => setClicked(prev => !prev)} className={`w-11/12 ${!clicked ? 'max-h-[80px]' : 'max-h-[450px]'} transition_ease ${runAnim && 'bounce'} backdrop-blur-3xl cursor-grab fixed bottom-0 overflow-hidden min-h-[100px] z-0 rounded-tl-3xl rounded-tr-3xl flex flex-col`}>
            <div className="backdrop-blur-lg bg-black bg-opacity-70 w-full flex flex-col">

                <div className="flex flex-col justify-between mb-4">
                    {/* <p className={'text-2xl p-4 flex'}> Now Playing: <p className="marquee truncate">{active.title} by {active.artist}</p> </p> */}
                    <h1 className="marquee lg:p-4 p-6 opacity-70 lg:text-6xl text-5xl self-center font-thin text-white">{active.title}</h1>
 
                </div>

                <YouTubePlayer vid={active.path} />
                {/* <iframe onEnded={() => console.log('working')} src={active.path} width={'90%'} height={'300px'} autoPlay={true} allowFullScreen allow={'autoplay'} className={'mt-2 mb-4 self-center text-center'} /> */}
            </div>
        </Footer>
    </>
};