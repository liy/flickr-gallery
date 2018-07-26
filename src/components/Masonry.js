import React, {Component} from 'react';
import ImageItem from './ImageItem';
import './Masonry.scss'

let Masonry = ({store, images}) => {
  let imageItems = [];
  for(let i=0; i<images.length; ++i) {
    let image = images[i];
    imageItems[i] = <ImageItem store={store} thumbnail={image.thumbnail} link={image.link} title={image.title} description={image.description} key={i}/>;
  }
  
  return <div className='masonry'>{imageItems}</div>
}

export default Masonry;