// import logo from './logo.svg';
import './App.css';
import AddVideo from './components/AddVideo';
import VideoData from './data/data';
import { useState } from 'react';
import VideoList from './components/VideoList';


function App() {
  const [videos, setVideos] = useState(VideoData);

 function addVideo(video) {
  setVideos([
    ...videos,
    {...video, id: videos.length+1}
  ])
 }

  return (
    <main className='bg-indigo-50/20'>
      <div className='py-3 text-indigo-600 bg-indigo-200 text-center text-3xl uppercase'>
        home page
      </div>
      <section className='py-6'>
        <div className="container">
          <AddVideo AddVideo={addVideo}></AddVideo>
        </div>
      </section>
      <div className="container">
        <div className='grid grid-cols-3 items-center gap-6 py-6'>
          <VideoList videos={videos}></VideoList>
        </div>
      </div>
    </main>
  );
}

export default App;
