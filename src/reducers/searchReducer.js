const initialState = {
  data: {},
  total: 0,
  totalPages: 0,
  page: 0,
  pageSize: 0,
  isLoading: false,
  isError: false,
  errorMessage: '',
}

export default function sellerReducer(state = initialState, action) {
  switch (action.type) {
    case 'BEGIN_SEARCH':
      return {...state, isLoading: true}
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        total: action.payload.total,
        totalPages: action.payload.totalPages,
        page: action.payload.page,
        pageSize: action.payload.pageSize,
      }
    case 'SEARCH_ERROR':
      return {...state, isLoading: false, isError: true, errorMessage: action.payload}
    default:
      return state
  }
}
