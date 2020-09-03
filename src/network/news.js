import { get, post } from './request'

function getNewsList(params) {
  return get('/newsList', params)
}
function updateList(params) {
  return post('/updateNewsList', params)
}
export default {
  getNewsList,
  updateList
}
