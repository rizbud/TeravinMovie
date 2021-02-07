import { call, put } from 'redux-saga/effects'
import MovieActions from '../Redux/MovieRedux'

export function * getTrending (api) {
  const response = yield call(api.getTrending)

  if (response.ok) {
    yield put(MovieActions.getTrendingSuccess(response.data.results))
  } else {
    yield put(MovieActions.getTrendingFailure(response))
  }
}

export function * getList (api) {
  const response = yield call(api.getList)

  if (response.ok) {
    yield put(MovieActions.getListSuccess(response.data.results))
  } else {
    yield put(MovieActions.getListFailure(response))
  }
}

export function * getDetail (api, action) {
  const { data } = action
  const response = yield call(api.getDetail, data)

  if (response.ok) {
    yield put(MovieActions.getDetailSuccess(response.data))
  } else {
    yield put(MovieActions.getDetailFailure(response))
  }
}
