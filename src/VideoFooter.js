import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'

const VideoFooter = () => {
  return (
    <div className='videoFooter'>
      <div className="videoFooter__text">
        <h3>@rafehqazi</h3>
        <p>this is description</p>
        <MusicNoteIcon />
        <Ticker mode="smooth">
          {({ index }) => (
            <>

            </>
          )}

        </Ticker>
      </div>
      <img className="videoFooter__record" 
      src="" 
      alt=""
      />
    </div>
  )
}

export default VideoFooter
