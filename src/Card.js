import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { AppContext } from "./App";

const CardBg = styled.div`


`

const Track = styled.button`
    padding: .5em;
    border-radius: 10px; 
    border: 1px solid;
    font-weight: 800;
    transition: 1s ease;

    &:hover {
        background: black;
        color: white;
    }
`

export default function Card(props) {
    const { tgt } = props;
    const { setActive } = useContext(AppContext);
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

    const ref = useRef();

    return <>
    <div className="flex flex-col gap-2 max-h-[600px] overflow-scroll">
        <div onClick={(e) => {setExpanded(prev => !prev); window.scrollTo(0, document.body.scrollHeight)}} className="pb-4 flex backdrop-blur-lg flex-col justify-center drop-shadow-xl items-center border-0 cursor-pointer rounded-xl hover:bg-slate-800  hover:text-white transition_ease">
                    <img 
                        className={`m-4 rounded-xl object-cover w-11/12 max-h-[300px] rounded-bl-none rounded-br-none`}
                        src={tgt.cover} 
                        alt={`${tgt.title} album cover`} 
                    />
                    <h2
                        children={tgt.title}
                        className={`font-bold uppercase text-3xl self-start ml-4 tracking-tight`}
                    />
                    <h2
                        children={tgt.artist}
                        className={`font-bold uppercase text-xl self-start ml-4 tracking-tight`}
                    />
                    
        </div>

        <div className={`${expanded ? 'max-h-[1000px] max-w-[1000px]' : 'max-h-0 opacity-0 max-w-0'} p-4 border rounded-xl transition_ease overflow-scroll flex flex-col gap-1`}>
            {tgt.tracks.map((track) => {
                return <Track disabled={!expanded && true} onClick={(e) => {hc(e, track, tgt); setExpanded(false);}} key={track.title} children={`${track.title}`} />
            })}
        </div>
    </div>
    </>
}