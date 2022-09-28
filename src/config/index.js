import axios from 'axios'

const api = axios.create({
    baseURL: 'https://portofolioivan.herokuapp.com'
})

export default api;