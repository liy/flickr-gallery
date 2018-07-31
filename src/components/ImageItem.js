import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addLike, removeLike} from '../actions';
import './ImageItem.scss';
import LikeButton from './LikeButton';
import {isMobile} from '../utils';

let ImageItem = ({tabIndex, store, isLiked, link, description, thumbnail}) => {

  if(isMobile) {
    // since no rollover on mobile, show description by default when on mobile devices
    var style = {
      opacity: 0.8
    }
  }

  return <div className='image-item'>
      <img tabIndex={tabIndex} alt={description} className='thumbnail-image' src={thumbnail}/>
      <div className='description' style={style}>{/* add and remove from favourites */}
        <LikeButton isLiked={isLiked} onClick={(e) => {
          if(isLiked) {
            store.dispatch(removeLike(link));
          } 
          else {
            store.dispatch(addLike(link));
          }
        }} />
        <p>{description}</p>
      </div>
    </div>
}

const mapStateToProps = (state, props) => {
  return {
    // For simplicity reason, store is passed in explicitly
    store: props.store,
    tabIndex: props.tabIndex, 
    isLiked: state.favourites.includes(props.link),
    link: props.link,
    description: props.description,
    thumbnail: props.thumbnail,
  }
}
ImageItem = connect(mapStateToProps)(ImageItem);

export default ImageItem;