import { createContext, useContext, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { AppContext } from './App';
import { data } from './data';


const Turntable = styled.div`
    position: relative;
    margin: auto;
    display: block;
    margin-top: 8%;
    margin-bottom: 8%;
    width: 90%;
    max-width: 310px;
    height:280px;
    background: grey;
    border-radius: 10px;
    box-shadow: inset 0 0 10px rgba(255,255,255,0.7);

    &:before {
        content: ' ';
        position: absolute;
        width: 90%;
        height: 100%;
        background: linear-gradient(0, transparent, 40%, rgba(255,255,255,0.35), 60%, transparent);
    }
`

const Spin = keyframes`
    0% {
        transform: none;
    }
    
    100% {
        transform: rotate(360deg);
    }
`
const Record = styled.div`
    position: absolute;
    left: 35px;
    top: 35px;
    width: 200px;
    height: 200px;
    background: black;
    border-radius: 50%;
    animation: ${Spin} 2s infinite linear;
    animation-play-state: ${props => props.spinning ? 'play' : 'paused'};
    box-shadow: ${props => props.spinning? '0 0 1.1em white': ''};
    transition: 1s ease;

    &:before {
        content: '';
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        width: 180px;
        height: 180px;
        background: repeating-radial-gradient(black, black 5px, #1C1C1C 6px, #1C1C1C 7px);
        border-radius: 50%;
    }

`
const Inner = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 75px;
    height: 75px;
     background: linear-gradient(white, white 50%, #F796A8 50%, #F796A8); 
    background-color: blue;
    background-image: url(${props => props.active.cover});
    background-size: contain;
    border-radius: 50%;

    &:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        background: black;
        border-radius: 50%;
    }

    &:after {
        content: '';
        width: 55px;
        text-align: center;
        font-family: sans-serif;
        font-size: 8px;
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
    }
`
const Overlay = styled.div`
    content: '';
    left: 35px;
    top: 35px;
    position: absolute;
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, transparent, 40%, rgba(255,255,255,0.35), 60%, transparent);
    border-radius: 50%;
`
const ArmHolder = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    background: gray;
    border-radius: 50%;
    right: 20px;
    top: 40px;

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30px;
        height: 30px;
        background: #939393;
        border-radius: 50%;
    }
`

const ArmTwitch = keyframes`
    0% {
        transform: skew(-20deg, -20deg);
    }  
    100% {
        transform: skew(-20deg, -20deg) rotate(1deg);
    }
 `

const Arm = styled.div`
    position: absolute;
    right: 13px;
    width: 60px;
    top: 10px;
    height: 110px;
    border: 10px solid #939393;
    transform: skew(-20deg, -20deg);
    transform-origin: top right;
    border-left-color: transparent;
    border-top-color: transparent;
    border-radius: 0 0 30% 0;
    animation: ${ArmTwitch} 0.5s infinite;
    animation-direction: alternate-reverse;
    animation-play-state: ${props => props.spinning ? 'running' : 'paused'};

    &:before {
        content: '';
        position: absolute;
        width: 20px;
        height: 30px;
        background: gray;
        transform: skew(20deg, 20deg) rotate(75deg);
        top: 80px;
        left: -10px;
        border-radius: 20%;
        clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
    }
`

const Bounce = keyframes`
    0% {
        bottom: 20px
    } 50% {
        bottom: 18px
    } 75% {
        bottom: 15px
    } 100% {
        bottom: 20px
    }
`

const Dial = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 25px;
    height: 25px;
    background: #333642;
    border-radius: 50%;
    transition: 1s ease;
    transform: ${props => props.spinning ? 'rotate(180deg)' : ''};
    cursor: pointer;
    animation: ${Bounce} ${props => props.spinning ? '0': '2s'} infinite alternate;

    &:before {
        content: '';
        left: 50%;
        transform: translateX(-50%);
        top: 2px;
        position: absolute;
        width: 2px;
        height: 5px;
        background: white;
        border-radius: 50%;
    }

    // &:hover {
    //     transform: rotate(180deg);
    //     transition: 1s ease;
    // }
`

export default function VinylPlayer(props) {
    const { active, setConfirmed, playerStatus } = useContext(AppContext);
    const [spinning, setSpinning] = useState(false);


    return <Turntable>
            <Record active={active} playerStatus={playerStatus} spinning={spinning} children={<Inner active={active} />} />
            <Overlay />
            <ArmHolder children ={<Arm spinning={spinning} />} />
            <Dial spinning={spinning} onClick={() => {setSpinning(prev => !prev); setTimeout(() => {setConfirmed(true)}, 500);}} />
    </Turntable>
}