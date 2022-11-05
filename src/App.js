import { useEffect, useState, createContext, useContext } from 'react';
import Landing from './Landing';
import Main from './Main';
import { data } from './data';
import styled from 'styled-components';

const Body = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;

  // &:before {
  //   content: '';
  //   top: 3em;
  //   margin: 0 auto;
  //   right: 0;
  //   position: fixed;
  //   left: 0;
  //   width: 90vw;
  //   height: 100vh;
  //   background-color: transparent;
  //   --tw-backdrop-blur: 1em;
  //   z-index: 0;
  //   border-top-right-radius: 1em;
  //   border-top-left-radius: 1em;
  //   border: 0 grey solid;
  //   box-shadow: 0 0 1em black;
  // }
`

export const AppContext = createContext();

function App() {

  const [msg, setMsg] = useState('Want to hear my soundtrack of 2022?');
  const [confirmed, setConfirmed] = useState(false);

  const randomNum = Math.floor(Math.random() * data.length);
  const randomNum2 = Math.floor(Math.random() * data[randomNum].tracks.length);

  const [active, setActive] = useState({
    album: '',
    artist: '',
    title: '',
    path: '',
    cover: ''
  });

  const [playerStatus, setPlayerStatus] = useState('');

  useEffect(() => {
    const tgt = data[randomNum];
    const track = tgt.tracks[randomNum2];
    setActive({
      album: tgt.title,
      artist: tgt.artist,
      title: track.title,
      path: track.path,
      cover: tgt.cover
  });
  }, [])

  useEffect(() => {
    if (confirmed) {
      setTimeout(() => {
        setMsg('');
      }, 3000)
    }
  }, [confirmed]);

  const [toggled, setToggled] = useState(false);


  return (
    <>
    <Body img={toggled && active.cover} className="flex min-h-screen flex-col justify-center items-center bg-slate-100">
        <AppContext.Provider value={{msg, data, confirmed, playerStatus, setPlayerStatus, toggled, setToggled, setMsg, setConfirmed, active, setActive}}>
          { (msg === '' && confirmed) ? <Main /> : <Landing /> }    
        </AppContext.Provider>
      </Body>
    </>
  );
}

export default App;
