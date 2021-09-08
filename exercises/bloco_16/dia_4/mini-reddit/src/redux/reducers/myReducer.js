import { GET_REDDIT, GET_REDDIT_SUCCESS, GET_REDDIT_ERROR } from '../actions/actionTypes';

const INITIAL_STATE = {
  loading: false,
}

const myReducer = (state = INITIAL_STATE, { type, reddits, error } ) => {
  switch (type) {
    case GET_REDDIT:
      return { ...state, loading: true }
    case GET_REDDIT_SUCCESS:
      return { ...state, loading: false, reddits, error: null }
    case GET_REDDIT_ERROR:
      return { ...state, loading: false, reddits: null, error }
    default:
      return state;
  }
}

export default myReducer;
