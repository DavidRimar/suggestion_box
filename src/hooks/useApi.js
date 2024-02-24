import axios from 'axios';
import { useEffect, useState } from 'react';

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

export function useApi(method, uri, postData = undefined, deps = []) {
    const [responseData, setResponseData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        makeApiCall(method, uri, (response) => {
            setResponseData(response);
            setError(false);
            setLoading(false);
        }, (errorMessage) => {
            setError(errorMessage);
            setResponseData(false);
            setLoading(false);
        }, postData);
    }, [uri, JSON.stringify(postData), ...deps]);

    return [responseData, loading, error];
}