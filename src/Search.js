import { useState } from "react"
import VinylPlayer from "./VinylPlayer"

export default function Search(props) {
    return <>
        <div className={`w-screen transition_ease h-screen flex flex-col justify-center items-center bg-white backdrop-blur-lg bg-opacity-60  fixed ${props.searchVis ? 'left-0 z-20' : ' opacity-0 -z-10'} top-0`}>

            <input type='text' className={'h-[100px] leading-[100px] w-10/12 p-10 border-black bg-opacity-0 bg-transparent text-6xl'} />
            <button className="fixed top-10 right-10" onClick={() => props.setSearchVis(false)}>Hide</button>
            <VinylPlayer />

        </div>
    </>
};