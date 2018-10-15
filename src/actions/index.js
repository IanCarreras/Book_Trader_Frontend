import axios from 'axios'
import {
  GET_BOOKS,
  AUTH_STATUS
} from '../constants'

const BASE_URL = 'http://localhost:8000'

const getBooks = () => {
  return (dispatch) => {
    axios.get(`${BASE_URL}/api/books`)
    .then( ({ data }) => {
      dispatch({
        type: GET_BOOKS,
        data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

const authStatus = (nextStatus) => {
  return {
    type: AUTH_STATUS,
    payload: nextStatus
  }
}

export default {
  getBooks,
  authStatus
}
