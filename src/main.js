import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';
import Masonry from './components/Masonry';
import GalleryHeader from './components/GalleryHeader'
import {reducer} from './reducer';
import {createStore} from 'redux';
import './main.scss';

export default class App extends Component 
{
  constructor(props) {
    super(props)

    this.state = {
      favouritesOnly: this.props.store.getState().favouritesOnly,
      images: []
    }

    // This is so anti-pattern, I guess people should never use jsonp, CORS headers should be used instead.
    window.jsonpCallback = (data) => {
      // map to a more friendly state
      let images = [];
      for(let item of data.items) {
        // console.log(item)
        let dummy = document.createElement('div');
        // potential XXS, but might be fine, since it's not added to the DOM
        dummy.innerHTML = item.description;

        images.push({
          title: item.title,
          description: dummy.textContent,
          link: item.link,
          thumbnail: item.media.m
        });
      }

      this.setState({images})

      // clean up script tag
      if(document.head.contains(this.jsonp)) {
        document.head.removeChild(this.jsonp);
      }
    }
  }

  componentWillMount() {
    this.jsonp();

    // Subscribe store state changes, for filtering the images not in the favourite list
    // root level, no need to unsubscribe
    this.props.store.subscribe(() => {
      let storeState = this.props.store.getState();
      this.setState({
        favouritesOnly: storeState.favouritesOnly
      });

      // save store state changes to localstorage
      localStorage.setItem('store', JSON.stringify(storeState));
    });
  }

  jsonp() {
    this.jsonp = document.createElement('script');
    this.jsonp.setAttribute('src', `http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=jsonpCallback&tags=dogs%20in%20hats`);
    // just in case there is an error loading the script
    this.jsonp.onerror = (e) => {
      if(document.head.contains(this.jsonp)) {
        document.head.removeChild(this.jsonp);
      }
    }
    document.head.appendChild(this.jsonp);
  }

  render () {
    let images = this.state.images;
    // filter favourites if favourite only is on
    if(this.state.favouritesOnly) {
      images = images.filter(image => {
        let storeState = this.props.store.getState();
        // link is the id, I should call it id instead...
        return storeState.favourites.includes(image.link)
      })
    }

    return (
      // I'll just pass store explicitly, for simplicity reason
      <div>
        <GalleryHeader store={this.props.store}/>
        <Masonry store={this.props.store} images={images}/>
      </div>
    );
  }
}

// plain localStorage for redux state for simplicity, default is empty favourites array
let data = JSON.parse(localStorage.getItem('store') || JSON.stringify({
  favourites: [],
  favouritesOnly: false,
}));
ReactDOM.render(<App store={createStore(reducer, data)}/>, document.getElementById("app"));