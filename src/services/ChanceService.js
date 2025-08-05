import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.barati.co/api/v1/analysis',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getNumbers() {
    return apiClient.get('/best-numbers')
  },
  getNumber(id) {
    return apiClient.get('/numbers/' + id)
  },
}
