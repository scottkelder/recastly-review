import React, {Fragment} from 'react'

const VideoPlayer = (props) => {
  return (
    <div>
      <h1>{props.video.title}</h1>
      <p>{props.video.desciption}</p>
      <img src={props.video.image} />
      {/* <iframe url={props.video.url}></iframe> */} {/* <---- That is how it should be (an iframe.) Becasue we are not actually querying YouTube, I put an image tag so you would know it works. */}
    </div>
  )
}
export default VideoPlayer;