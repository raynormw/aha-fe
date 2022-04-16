import Axios from 'axios';
import { Navigate } from 'react-router-dom';

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
      console.log(error, 'error');
      dispatch({ type: 'SEARCH_ERROR', payload: error.message });
    });
  }
}

// export const search = (pageSize, keyword) => {
//   return dispatch => {
//     dispatch({ type: 'BEGIN_SEARCH' });
//     Axios({
//       method: 'get',
//       url: base_api + 'search',
//       // data
//     })
//     .then((res) => {
//       console.log(res, 'res');
//       // const data = res.data.data;
//       // dispatch({ type: 'SEARCH_SUCCESS', res });
//     })
//     .catch((error) => {
//       console.log(error, 'error');
//
//       // dispatch({ type: 'SEARCH_ERROR' });
//     });
//   }
// }

// export const addSeller = (data) => {
//   return dispatch => {
//     dispatch({ type: 'ADD_SELLER' });
//     // POST request using fetch()
//     fetch('https://dev.dummy-api.alamisharia.co.id/addSeller', {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     })
//
//     // Converting to JSON
//     .then(response => {
//       console.log(response, 'response');
//       response.json()
//     })
//
//     // Displaying results to console
//     .then(json => console.log(json, 'json'))
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   }
// }
