import axios from 'axios'

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

export default axios.create({
    baseURL: `${CORS_PROXY}http://dev.frevend.com/json/users.json`
})