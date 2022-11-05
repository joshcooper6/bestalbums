import { data } from "./data";
import Player from "./Player";
import Card from "./Card";
import { useContext, useState } from "react";

import styled from "styled-components";
import { AppContext } from "./App";

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    &input {
        opacity: 0;
        width: 0;
        height: 0;
    }
`

const Checkbox = styled.input`
   
`

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;

    &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    &:checked {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
`
export default function Main() {
    console.log(data)

    const {setToggled } = useContext(AppContext);

    const albums = data.map((album) => {
        return <Card tgt={album} />
    })

    return <>

        {/* <label class="switch">
            <input onChange={(e) => setToggled(e.target.checked)} type="checkbox" />
            <span class="slider round"></span>
        </label> */}

        <div className="flex gap-4 mt-10 flex-wrap justify-center items-center mb-[120px]">
            {albums}
        </div>
        <Player />
    </>
}