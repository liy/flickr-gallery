import React, {Component} from 'react';
import './LikeButton.scss'
import {isMobile} from '../utils';

const LikeButton = ({isLiked, onClick}) => {
  // for simplicity reason, 2 svg are used
  let url = isLiked ? require('../assets/hearts-on.svg') : require('../assets/hearts-off.svg');
  
  if(isMobile) {
    // since no rollover on mobile, display like button by default when on mobile devices
    var style = {
      opacity: 0.8
    }
  }

  return (
    <div className='like-button' onClick={onClick} style={style}>
      <img alt={isLiked ? 'remove from favourite' : 'add to favourite'} src={url}/>
    </div>
  );
}

export default LikeButton;