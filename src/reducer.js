import { Action } from './actions'

export const reducer = (state, action) => {
  switch(action.type) {
    case Action.ADD_LIKE:
      return {
        ...state,
        // add new liked image into the favouerite list if it does not exist in the list
        favourites: state.favourites.includes(action.imageID) ? state.favourites : [...state.favourites, action.imageID]
      }
    case Action.REMOVE_LIKE:
      return {
        ...state,
        // remove image from the favouerite list
        favourites: state.favourites.filter(id => id != action.imageID)
      };
    case Action.TOGGLE_FAVOURITES_ONLY:
      return {
        ...state,
        favouritesOnly: !state.favouritesOnly
      }; 

    default: return state;
  }
}