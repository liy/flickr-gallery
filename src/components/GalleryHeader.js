import React, {Component} from 'react';
import ToggleButton from './ToggleButton';

const GalleryHeader = ({store}) => {
    return (<div style={{margin: 10}}>
        <ToggleButton store={store}>Favourites Only</ToggleButton>
      </div>);
}

export default GalleryHeader;