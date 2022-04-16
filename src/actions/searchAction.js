import Axios from 'axios';

import { base_api } from 'services/api';

export const search = (pageSize, keyword, page = 1) => {
  return dispatch => {
    dispatch({ type: 'BEGIN_SEARCH' });
    Axios({
      method: 'get',
      url: base_api + 'users/all?page=' + page + '&pageSize=' + pageSize + '&keyword=' + keyword,
    })
    .then((res) => {
      const results = res.data;
      dispatch({ type: 'SEARCH_SUCCESS', payload: results, keyword });
    })
    .catch((error) => {
      dispatch({ type: 'SEARCH_ERROR', payload: error.message });
    });
  }
}

export const searchMore = (pageSize, keyword, page) => {
  return dispatch => {
    dispatch({ type: 'BEGIN_SEARCH_MORE' });
    Axios({
      method: 'get',
      url: base_api + 'users/all?page=' + page + '&pageSize=' + pageSize + '&keyword=' + keyword,
    })
    .then((res) => {
      const results = res.data;
      dispatch({ type: 'SEARCH_MORE_SUCCESS', payload: results, keyword });
    })
    .catch((error) => {
      dispatch({ type: 'SEARCH_MORE_ERROR', payload: error.message });
    });
  }
}
