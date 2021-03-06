import {
  GET_BOOKS,
} from '../constants'

import _ from 'lodash'

const defaultState = {
  books: []
}

export default (state = defaultState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case GET_BOOKS:
      newState.books = action.data
      return newState
    default:
      return state
  }
}
