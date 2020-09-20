import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter'

const Video = () => {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://v19-web.tiktokcdn.com/b804d2b5adbbaeb1461567af91d5cd66/5f667716/video/tos/useast2a/tos-useast2a-ve-0068c002/721b97b3b943478b914e20d0b3a9b056/?a=1988&br=2822&bt=1411&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009191524270101902192185F079296&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3A1a2kzZXA8djMzNjczM0ApZTg5NDU5ZWRlNzg5ZTs8OGdoZXIwcWVlc2JfLS01MTZzcy4vMWMxNjRgYjIwMzJhNjA6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter />
      {/* <VideoFooter /> */}
      {/* <VideoSidebar /> */}
    </div>
  )
}

export default Video