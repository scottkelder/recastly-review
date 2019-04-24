import React from 'react';
const VideoListEntry = (props) => {
  return (
    <div>
      <p>{props.video.title}</p>
      <p>{props.video.desciption}</p>
      <img src={props.video.image} onClick={() => props.entryClick(props.video)}></img>
    </div>
  )
}
export default VideoListEntry;