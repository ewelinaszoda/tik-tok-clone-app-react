import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const VideoFooter = () => {
  return (
    <div className='videoFooter'>
      <div className="videoFooter__text">
        <h3>@rafehqazi</h3>
        <p>this is description</p>
        <MusicNoteIcon />
      </div>
      <img className="videoFooter__record" 
      src="" 
      alt=""
      />
    </div>
  )
}

export default VideoFooter
