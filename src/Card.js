import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { AppContext } from "./App";

const CardBg = styled.div`
    background-image: url(${props => props.bg});
    background-position: top;
    background-size: cover;
`

const Cover = styled.div`
    background-image: url(${props => props.bg});
`

const Track = styled.button`
    padding: .5em;
    border-radius: 10px; 
    border: 1px solid;
    font-weight: 800;
    transition: 1s ease;

    &:hover {
        color: white;
    }
`

export default function Card(props) {
    const { tgt } = props;
    const { setActive, active } = useContext(AppContext);
    const [expanded, setExpanded] = useState(false);
    
    

    const hc = (e, track, tgt) => {
        setActive(prev => ({
            title: track.title,
            artist: tgt.artist,
            album: tgt.title,
            path: track.path,
            cover: tgt.cover
        }))
    };

    return <>
    <div className="flex flex-col md:gap-2 w-11/12 md:w-auto max-h-[700px] overflow-scroll">
        <div onClick={(e) => {setExpanded(prev => !prev); e.target.scrollIntoView() }} className="p-8 md:p-6 flex backdrop-blur-lg flex-col justify-center drop-shadow-xl items-center border-0 cursor-pointer rounded-xl hover:bg-slate-800  hover:text-white transition_ease">
                    <img 
                        className={`m-4 rounded-xl object-center object-cover w-11/12 max-h-[300px] rounded-bl-none rounded-br-none drop-shadow-lg`}
                        src={tgt.cover} 
                        alt={`${tgt.title} album cover`} 
                    />
                    <h2
                        children={tgt.title}
                        className={`font-bold uppercase text-3xl self-start ml-4 tracking-tight`}
                    />
                    <h2
                        children={tgt.artist}
                        className={`font-light uppercase text-xl self-start ml-4 tracking-widest`}
                    />
                    
        </div>

        <CardBg className={`${expanded ? 'max-h-[1000px] max-w-[1000px]' : 'max-h-0 opacity-0 max-w-0'} h-[300px p-4 border-t-4 gap-2 transition_ease overflow-scroll flex flex-col`}>
                {tgt.tracks.map((track) => {
                    return <Track disabled={!expanded && true} onClick={(e) => {hc(e, track, tgt); setExpanded(false);}} key={track.title} className={`hover:bg-slate-900 uppercase ${active.title === track.title && 'bg-slate-900 text-white'}`} children={`${track.title}`} />
                })}
        </CardBg>
    </div>
    </>
}