import { useContext } from "react";
import { AppContext } from "./App";
import Typed from 'react-typed';
import VinylPlayer from "./VinylPlayer";

export default function Landing() {

  const {msg, confirmed, setConfirmed, toggled, setMsg} = useContext(AppContext);

    return <>
    <div className="h-full text-center max-w-[600px] md:scale-150 w-full flex flex-col-reverse items-center justify-center">
        { confirmed ? <Typed 
          strings={['Music contains the memories of our lives...', 'Here are some of mine...']}
          typeSpeed={5}
          backSpeed={5}
          className={`text-4xl ${toggled && 'text-white'} w-9/12 min-h-[150px] self-center text-left tracking-tight font-black fadeIn transition_ease`}
          /> : <h1
        children={'Ready to listen to my top albums of 2022?'}
        className={`text-4xl ${toggled && 'text-white'} w-9/12 min-h-[150px] leading-[50px] self-center text-left tracking-tight font-black fadeIn transition_ease`}
        /> }
        <VinylPlayer className={''} />
        {/* <button 
          onClick={() => { setConfirmed(true); setMsg('Music contains the memories of our lives... here are some of mine.'); }} 
          className={`p-4 ${confirmed ? 'hidden' : ''} transition_ease border rounded-xl drop-shadow-md m-4 w-10/12 self-center`}
          disabled={confirmed}
          children={confirmed ? '' : 'Confirm'} 
        /> */}
    </div>
    </>
};