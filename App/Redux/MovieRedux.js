import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  getTrendingRequest: ['data'],
  getTrendingSuccess: ['data'],
  getTrendingFailure: ['error'],

  getListRequest: ['data'],
  getListSuccess: ['data'],
  getListFailure: ['error'],

  getDetailRequest: ['data'],
  getDetailSuccess: ['data'],
  getDetailFailure: ['error'],
})

export const MovieTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  trending: { data: null, fetching: false, error: null },
  list: { data: null, fetching: false, error: null },
  detail: { data: null, fetching: false, error: null },
})

export const MovieSelectors = {
  getData: state => state.movie.movieModule
}

export const getTrendingRequest = (state, { data }) =>
  state.merge({ ...state, trending: { ...state.trending, fetching: true, error: null } })
export const getTrendingSuccess = (state, { data }) =>
  state.merge({ ...state, trending: { ...state.trending, data, fetching: false, error: null } })
export const getTrendingFailure = (state, { error }) =>
  state.merge({ ...state, trending: { ...state.trending, fetching: false, error } })

export const getListRequest = (state, { data }) =>
  state.merge({ ...state, list: { ...state.list, fetching: true, error: null } })
export const getListSuccess = (state, { data }) =>
  state.merge({ ...state, list: { ...state.list, data, fetching: false, error: null } })
export const getListFailure = (state, { error }) =>
  state.merge({ ...state, list: { ...state.list, fetching: false, error } })

export const getDetailRequest = (state, { data }) =>
  state.merge({ ...state, detail: { ...state.detail, fetching: true, error: null } })
export const getDetailSuccess = (state, { data }) =>
  state.merge({ ...state, detail: { ...state.detail, data, fetching: false, error: null } })
export const getDetailFailure = (state, { error }) =>
  state.merge({ ...state, detail: { ...state.detail, fetching: false, error } })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TRENDING_REQUEST]: getTrendingRequest,
  [Types.GET_TRENDING_SUCCESS]: getTrendingSuccess,
  [Types.GET_TRENDING_FAILURE]: getTrendingFailure,

  [Types.GET_LIST_REQUEST]: getListRequest,
  [Types.GET_LIST_SUCCESS]: getListSuccess,
  [Types.GET_LIST_FAILURE]: getListFailure,

  [Types.GET_DETAIL_REQUEST]: getDetailRequest,
  [Types.GET_DETAIL_SUCCESS]: getDetailSuccess,
  [Types.GET_DETAIL_FAILURE]: getDetailFailure,
})
