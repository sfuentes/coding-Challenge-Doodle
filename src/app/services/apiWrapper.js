/**
 * Be aware that this is based upon my own base Axios <=> action wrapper i use in my Projects, not really custom to the Coding Challenge
 */

import Axios from 'axios';
import config from '../../../conf/app.conf';


const axios = Axios.create({
    baseURL: `${config.apiHost}`,
    timeout: 1000000,
});


const handleNetworkError = (error) => {
    // eslint-disable-next-line no-prototype-builtins
    if (error.config && error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false) {
        return Promise.reject(error);
    }

    if (error.response) {
        switch (error.response.status) {
            case 400:
                return Promise.reject(error.response);

            case 401:
                // session expired
                history.push('/expired');
                break;

            case 404:
                return Promise.reject(error.response);

            case 500:
                return Promise.reject(error.response);

            default:
                // eslint-disable-next-line no-console
                console.error(error);
        }
    }
    return null;
};

// used for setting up Error Handing
axios.interceptors.response.use(
    response => response,
    error => handleNetworkError(error),
);


class api {
    constructor({basePath = config.apiPath}) {
        this.axios = axios;
        this.basePath = basePath;

    }

    // eslint-disable-next-line class-methods-use-this
    getHeaders() {
        return {
            token: config.apiToken,
        };
    }

    get({
            endpoint = '', params, headers, apiRoot,
        }) {
        const defaultApi = apiRoot || `?token=${config.apiToken}`;
        const options = {headers: {...this.getHeaders(), ...headers}};

        return this.axios.get(`${this.basePath}${defaultApi}${endpoint}`, {...options, ...params});
    }

    post({
             endpoint = '', params, headers, data, apiRoot,
         }) {

        const defaultApi = apiRoot || '';
        const options = {headers: {...this.getHeaders(), ...headers}};
        return this.axios.post(`${this.basePath}${defaultApi}${endpoint}`, data, {...options, ...params});
    }

}

export default api;
