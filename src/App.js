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

  const [active, setActive] = useState({
    album: '',
    artist: '',
    title: '',
    path: ''
});

useEffect(() => {
  setActive(data[randomNum].tracks[randomNum]);
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
    <div className="flex min-h-screen flex-col justify-center items-center">
        <AppContext.Provider value={{msg, confirmed, setMsg, setConfirmed, active, setActive}}>
          { (msg === '' && confirmed) ? <Main /> : <Landing /> }    
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
