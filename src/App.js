import { useEffect, useState, createContext, useContext, lazy, Suspense } from 'react';
// import Landing from './Landing';
// import Main from './Main';
import { data } from './data';
import styled from 'styled-components';

const Landing = lazy(() => import('./Landing.js'));
const Main = lazy(() => import('./Main.js'));




const Body = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
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
            <Suspense fallback={<div>Loading</div>}>
              { (msg === '' && confirmed) ? <Main /> : <Landing /> }    
            </Suspense>
        </AppContext.Provider>
      </Body>
    </>
  );
}

export default App;
