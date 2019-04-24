import React, {Fragment} from 'react'

const VideoPlayer = (props) => {
  const defaultVideo = props.videos[0];
  return (
    <div>
      <p>{props.video.title}</p>
      <p>{props.video.desciption}</p>
      <iframe url={props.video.url}></iframe>
    </div>
  )
}
export default VideoPlayer;