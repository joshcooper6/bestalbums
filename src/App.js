import { useEffect, useState, createContext, useContext } from 'react';
import './App.css';
import Landing from './Landing';
import Main from './Main';
import { data } from './data';

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
      }, 2000)
    }
  }, [confirmed]);

  return (
    <>
    <div className="flex min-h-screen flex-col justify-center items-center bg-slate-100">
        <AppContext.Provider value={{msg, confirmed, setMsg, setConfirmed, active, setActive}}>
          { (msg === '' && confirmed) ? <Main /> : <Landing /> }    
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
