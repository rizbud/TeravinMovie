import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

import { StartupTypes } from '../Redux/StartupRedux'
import { StaticDataTypes } from '../Redux/StaticDataRedux'
import { MovieTypes } from '../Redux/MovieRedux'

import { startup } from './StartupSagas'
import { getRoot } from './StaticDataSagas'
import { getTrending, getList, getDetail } from './MovieSagas'

const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),

    takeLatest(StaticDataTypes.GET_ROOT_REQUEST, getRoot, api),

    takeLatest(MovieTypes.GET_TRENDING_REQUEST, getTrending, api),
    takeLatest(MovieTypes.GET_LIST_REQUEST, getList, api),
    takeLatest(MovieTypes.GET_DETAIL_REQUEST, getDetail, api),
  ])
}