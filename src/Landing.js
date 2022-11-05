import { useContext } from "react";
import { AppContext } from "./App";
import Typed from 'react-typed';

export default function Landing() {

  const {msg, confirmed, setConfirmed, toggled, setMsg} = useContext(AppContext);

    return <>
    <div className="h-full text-center max-w-[600px] w-full flex flex-col">
        { confirmed ? <Typed 
          strings={[msg]}
          typeSpeed={5}
          className={'text-3xl font-black'}
        /> : <h1
        children={'Ready to listen to my top albums of 2022?'}
        className={`text-3xl ${toggled && 'text-white'} w-9/12 self-center font-black fadeIn transition_ease`}
        /> }
        <button 
          onClick={() => { setConfirmed(true); setMsg('Music contains the memories of our lives... here are some of mine.'); }} 
          className={`p-4 ${confirmed ? 'hidden' : ''} transition_ease border rounded-xl drop-shadow-md m-4 w-10/12 self-center`}
          disabled={confirmed}
          children={confirmed ? '' : 'Confirm'} 
        />
    </div>
    </>
};