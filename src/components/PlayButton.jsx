import { useState } from "react";
import {BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs'

const PlayButton = ({ children, onPlay, onPause }) => {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    play ? onPlay() : onPause() ;
    setPlay(!play)
  }

  return (
    <button
      onClick={handlePlay}
      className=" bg-slate-500 border border-slate-900 rounded py-2 px-4 text-slate-50 text-lg flex items-center gap-3"
    >
      {children}{play ? <BsFillPlayFill/> : <BsFillPauseFill/>}
    </button>
  );
};

export default PlayButton;
