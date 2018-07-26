export const Action = {
  ADD_LIKE: 'add_like',
  REMOVE_LIKE: 'remove_like',
  TOGGLE_FAVOURITES_ONLY: 'toggle_favourites_only'
}

export const addLike = (imageID) => {
  return {
    type:Action.ADD_LIKE,
    imageID
  }
}

export const removeLike = (imageID) => {
  return {
    type:Action.REMOVE_LIKE,
    imageID
  }
}

export const toggleFavouritesOnly = () => {
  return {
    type:Action.TOGGLE_FAVOURITES_ONLY,
  }
}