import apisauce from 'apisauce'

// default headers request
const headers = {
  'Content-Type': 'application/json'
}
const api_key = 'f7b67d9afdb3c971d4419fa4cb667fbf'

const create = (baseURL = 'https://api.themoviedb.org/3') => {
  const api = apisauce.create({
    baseURL,
    headers,
    timeout: 10000
  })

  const getTrending = () => api.get(`/trending/movie/week?api_key=${api_key}`)
  const getList = () => api.get(`/discover/movie?api_key=${api_key}`)
  const getDetail = (id) => api.get(`/movie/${id}?api_key=${api_key}`)

  return {
    getTrending,
    getList,
    getDetail,

    api
  }
}

export default {
  create
}
