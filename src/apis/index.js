import axios from 'axios'

const API = axios.create({
    baseURL: 'https://jsonplaceholder.typecode.com'
})

export const fetchGetData = async () => {
    return await API.get('/users')
}