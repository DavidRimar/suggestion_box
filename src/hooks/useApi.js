import axios from 'axios';

const BASE_URL = "https://otletdoboz.webuni.workers.dev";
export const AXIOS_METHOD = {
    'GET': 'GET',
    'POST': 'POST'
};

let authToken = false;

export function setApiToken(newToken) {
    authToken = newToken;
};

export function makeApiCall(method, url, onSuccess, onFailure = false, data = {}) {
    let axiosCall = method === AXIOS_METHOD.POST ? axios.post : axios.get;
    axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
        headers: authToken !== false ? {'Authorization': `Bearer ${authToken}`} : {}
    }).then(response => {
        onSuccess(response.data);
    }).catch(error => {
        console.error(error);
        if (onFailure === false) {
            return;
        }
        onFailure(error?.response?.data?.error, error);
    });
}