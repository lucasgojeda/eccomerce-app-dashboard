import axios from 'axios';

import { getEnvironmets } from '../helpers/getEnvironmets';

const { VITE_REACT_APP_API_URL } = getEnvironmets();


const dashboardApi = axios.create({
    baseURL: VITE_REACT_APP_API_URL
});

// Todo: configurar interceptores
dashboardApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})

export default dashboardApi;



