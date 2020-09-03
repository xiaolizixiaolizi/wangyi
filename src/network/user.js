import { post } from './request'

function getSms(params) {
  return post('/getSms/', params)
}
function register(params) {
  return post('/register/', params)
}

function login(params) {
  return post('/login/', params)
}
export default {
  getSms,
  register,
  login
}
