import { data } from "./data";
import Player from "./Player";
import Card from "./Card";
import { useContext, useEffect, useState } from "react";

import styled, { keyframes } from "styled-components";
import { AppContext } from "./App";

const Spin = keyframes`
    0% {
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
        transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
`

const Spinner = styled.div`
    &:before {
        animation: ${Spin} 1.5s linear infinite;
        animation-play-state: inherit;
        border: solid 5px #cfd0d1;
        border-bottom-color: #1c87c9;
        border-radius: 50%;
        content: "";
        height: 40px;
        width: 40px;
        position: absolute;
        top: 10%;
        left: 10%;
        transform: translate3d(-50%, -50%, 0);
        will-change: transform;
    }
`

export default function Main() {

    const { setToggled } = useContext(AppContext);

    const [searchVis, setSearchVis] = useState(false);
    const [loading, setLoading] = useState(false);

    const albums = data.map((album) => {
        return <Card tgt={album} />
    });

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 1000)
    // }, [])

    return <>

        {/* <label class="switch">
            <input onChange={(e) => setToggled(e.target.checked)} type="checkbox" />
            <span class="slider round"></span>
        </label> */}

            <div className="flex gap-4 mt-10 flex-wrap justify-center items-center mb-[120px]">
                {/* {albums}
                <Player /> */}

                {loading ? <>
                    <Spinner  />

                </> : <>
                    {albums}
                    <Player />
                </>}
            </div>


    </>
}