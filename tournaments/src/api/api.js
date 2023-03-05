import axios from 'axios'
import { getBaseURL } from '../helpers/functions/helper.functions'


//axios configs
const axiosParams = {
    baseURL: getBaseURL(),
    headers: { 'Content-type': 'application/json' },
    params: {
        key: import.meta.env.VITE_GCP_KEY
    }
}

const axiosInstance = axios.create(axiosParams);

const api = (axios) => {
    return {
        get: (url, config) => axios.get(url, config),
        post: (url, config, body) => axios.get(url, body, config),
        put: (url, config, body) => axios.get(url, body, config),
        delete: (url, config) => axios.get(url, config)
    }
}

export default api(axiosInstance)