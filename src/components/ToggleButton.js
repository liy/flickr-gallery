import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleFavouritesOnly} from '../actions' 
import './ToggleButton.scss'

let ToggleButton = ({store, favouritesOnly, children}) => {
  // for simplicity reason, 2 svg are used
  let url = favouritesOnly ? require('../assets/toggle-on.svg') : require('../assets/toggle-off.svg');

  return (
    <div className='toggle-button' onClick={() => {
      // update store state
      store.dispatch(toggleFavouritesOnly());
    }}>
      <img src={url}/>
      <span>{children}</span>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    store: props.store,
    favouritesOnly: state.favouritesOnly,
    children: props.children
  }
}
ToggleButton = connect(mapStateToProps)(ToggleButton)
export default ToggleButton;