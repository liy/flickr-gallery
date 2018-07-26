import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleFavouritesOnly} from '../actions' 
import './ToggleButton.scss'

let ToggleButton = ({store, favouritesOnly, children}) => {
  // for simplicity reason, 2 svg are used
  let url = favouritesOnly ? require('../assets/toggle-on.svg') : require('../assets/toggle-off.svg');

  let toggle = () => {
    store.dispatch(toggleFavouritesOnly());
  }

  return (
    // becaus i'm using div instead input, needs manually handle enter key make selection action 
    <div tabIndex="1" className='toggle-button' onClick={toggle} onKeyDown={e => {
      if(e.keyCode == 13) {
        toggle();
      }
    }}>
      <img alt={favouritesOnly ? 'turn favourites only off' : 'turn favourites only on'} src={url}/>
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