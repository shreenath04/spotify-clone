import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext'; 
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat'; 
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import VolumeUp from '@mui/icons-material/VolumeUp';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';


function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img 
        className='footer__albumLogo'
        src='' 
        alt='' />
        <div className='footer__songInfo'>
            <h4>YEAH!</h4>
            <p>Usher</p>
        </div>
      </div>

      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
        <SkipNextIcon className='footer__icon'/>
        <RepeatIcon className='footer__green' />
      </div>

      <div className='footer__right'>
      <Grid container spacing={2} alignItems="center">
      <Grid item>
          <PlaylistPlayIcon />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
        <Grid item xs>
          <Slider
            aria-labelledby="input-slider"
          />
        </Grid>
       </Grid>
      </div>
    </div>
  )
}

export default Footer 
