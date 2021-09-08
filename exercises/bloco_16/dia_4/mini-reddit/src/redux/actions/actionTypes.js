import getApi from '../../services/getApi';

export const GET_REDDIT = 'GET_REDDIT';
export const GET_REDDIT_SUCCESS = 'GET_REDDIT_SUCCESS';
export const GET_REDDIT_ERROR = 'GET_REDDIT_ERROR';

const loading = () => ({ type: GET_REDDIT });
const redditSuccess = (reddits) => ({ type: GET_REDDIT_SUCCESS, reddits });
const redditError = (error) => ({ type: GET_REDDIT_ERROR, error });

export const fetchReddits = (reddit) => {
  return async (dispatch) => {
    dispatch(loading())
    try {
      const response = await getApi(reddit);
      const myReddit = response.data.children;
      if(!myReddit) {
        throw new Error();
      }
      dispatch(redditSuccess(myReddit))
    }
    catch (e) {
      dispatch(redditError('Não encontrado'))
    }
  }
}
