import { useContext } from "react";
import { AppContext } from "./App";

export default function Landing() {

  const {msg, confirmed, setConfirmed, setMsg} = useContext(AppContext);

    return <>
    <div className="text-center w-full flex flex-col">
        <h1
          children={msg}
          className={`text-3xl w-9/12 self-center font-black fadeIn transition_ease`}
        />
        <button 
          onClick={() => { setConfirmed(true); setMsg('Music contains the memories of our lives... here are some of mine.'); }} 
          className={`p-4 ${confirmed ? 'hidden' : ''} transition_ease border rounded-xl drop-shadow-md m-4 w-10/12 self-center`}
          disabled={confirmed}
          children={confirmed ? '' : 'Confirm'} 
        />
    </div>
    </>
};