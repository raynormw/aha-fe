const initialState = {
  keyword: '',
  data: [],
  total: 0,
  totalPages: 0,
  page: 0,
  pageSize: 0,
  isLoading: false,
  isLoadingMore: false,
  isError: false,
  errorMessage: '',
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case 'BEGIN_SEARCH':
      return {...state, isLoading: true}
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        keyword: action.keyword,
        data: action.payload.data,
        total: action.payload.total,
        totalPages: action.payload.totalPages,
        page: action.payload.page,
        pageSize: action.payload.pageSize,
      }
    case 'SEARCH_ERROR':
      return {...state, isLoading: false, isError: true, errorMessage: action.payload}
    case 'BEGIN_SEARCH_MORE':
      return {...state, isLoadingMore: true}
    case 'SEARCH_MORE_SUCCESS':
      return {
        ...state,
        isLoadingMore: false,
        keyword: action.keyword,
        data: state.data.concat(action.payload.data),
        total: action.payload.total,
        totalPages: action.payload.totalPages,
        page: action.payload.page,
        pageSize: action.payload.pageSize,
      }
    case 'SEARCH_MORE_ERROR':
      return {...state, isLoadingMore: false, isError: true, errorMessage: action.payload}
    default:
      return state
  }
}
