import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/awakeelectronik/bestNumbers',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getNumbers() {
    return apiClient.get('/numbers')
  },
  getNumber(id) {
    return apiClient.get('/numbers/' + id)
  },
}
