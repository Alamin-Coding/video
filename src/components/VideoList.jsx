import Video from "./Video";

function VideoList({videos}) {
 return(
  <>
  {
    videos.map( video => {
      return(
        <Video 
          key={video.id}
          imgUrl={video.imgUrl}
          verified={video.verified}
          title={video.title}
          views={video.views}
          time={video.time}
          chanelName={video.chanelName}
          >
        </Video>
      )
    })
  }
  </>
 )
}

export default VideoList;