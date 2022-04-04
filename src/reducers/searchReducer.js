const initialState = {
  data: {},
  isLoading: false,
}

export default function sellerReducer(state = initialState, action) {
  switch (action.type) {
    case 'BEGIN_SEARCH':
      return {...state, isLoading: true}
    case 'SEARCH_SUCCESS':
      return {...state, isLoading: false, data: action.payload}
    case 'SEARCH_ERROR':
      return {...state, isLoading: false}
    default:
      return state
  }
}
