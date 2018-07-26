import React, {Component} from 'react';
import './LikeButton.scss'

const LikeButton = ({isLiked, onClick}) => {
  // for simplicity reason, 2 svg are used
  let url = isLiked ? require('../assets/hearts-on.svg') : require('../assets/hearts-off.svg');
  
  return (
    <div className='like-button' onClick={onClick}>
      <img src={url}/>
    </div>
  );
}

export default LikeButton;