import React from 'react'
import "./Player.css";
import Body from './Body';
import SIdebar from './SIdebar';
import Footer from './Footer';

function Player({ spotify }) {
  return (
    <div className="Player">
      <div className="player__body">
        <SIdebar/>
        <Body spotify={spotify}/>
        </div> 

        <Footer />
    </div>
  )
}

export default Player
