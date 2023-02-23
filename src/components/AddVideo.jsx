
import { useState } from "react";



const AddVideo = ({AddVideo}) => {
 const initialVideo = {
  id: 5,
  imgUrl: `https://picsum.photos/id/${5}/300/200`,
  time: '2 week ago',
  chanelName: 'Youtube',
  verified: true,
  title: '',
  views: ''
}
  const [video, setVideo] = useState(initialVideo);

 const handleSubmit = (e) => {
  e.preventDefault();
  AddVideo(video)
  setVideo(initialVideo)
}

 const handleChange = (e) => {
   setVideo({...video,
    [e.target.name] : e.target.value
    })
    
 }

  return (
    <div>
      <form action="#">
         <input onChange={handleChange} name='title' value={video.title} className='border border-cyan-600 p-2 mx-1 rounded' type="text" placeholder='Input Title' />
         <input onChange={handleChange} name='views' value={video.views} className='border border-cyan-600 p-2 mx-1 rounded' type="text" placeholder='Input Views' />
         <button className=' bg-blue-500 border border-blue-900 rounded py-2 px-4 text-slate-50 text-base ' onClick={handleSubmit} >Add Video</button>
       </form>
    </div>
  )
}

export default AddVideo
