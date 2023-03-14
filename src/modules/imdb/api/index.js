import axios from 'axios'

const geoApi = axios.create({
    baseURL: 'https://geo.api.gouv.fr/',
    headers: {
        "Content-Type": "application/json"
    }
})

export default geoApi;