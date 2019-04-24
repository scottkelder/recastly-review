import React from 'react';
import VideoListEntry from './VideoListEntry.js';

const VideoList = (props) => {
  return (
    <div>
      {props.videos.map((video, index) => <VideoListEntry key={index} video={video} entryClick={props.entryClick}/>)}
    </div>
  )
}
export default VideoList;