import PlayButton from "./PlayButton";
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineQuestion } from "react-icons/ai";

const Video = ({ imgUrl, title, views, time, chanelName, verified ,play }) => {
  return (
    <div className="shadow-md p-2">
      <div>
        <img className="w-full" src={imgUrl} alt={title} />
      </div>
      <h1 className="text-slate-100 text-2xl text-center py-1 font-semibold bg-slate-800">{title}</h1>
      <span className="p-2 text-red-500 inline-flex items-center gap-2 font-semibold">
        {chanelName}
        {verified ? <FcCheckmark title="Verified" /> : <AiOutlineQuestion title="Not Verified" /> }
      </span>
      <p className="flex items-center justify-between text-slate-500 p-2">
        <span>{views}</span>
        <span>{time}</span>
      </p>
      <PlayButton
        onPlay={() => console.log("Play")}
        onPause={() => console.log("Pause")}
      >
        Playing
      </PlayButton>
    </div>
  );
};

export default Video;
