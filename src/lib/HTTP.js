import { API_BASE_URL } from '../constants';

function headers(token, jsonContent = false) {
    return {
        Authorization: `Bearer ${token}`,
        ...(jsonContent && { 'Content-Type': 'application/json' })
    };
}

function isJsonResponse(response) {
    const contentType = response.headers.get('content-type');
    return contentType && contentType.indexOf('application/json') !== -1;
}

async function validateStatusCode(response) {
    if (!response.ok) {
        const error = new Error(
            `Request to ${response.url} failed with status code: ${response.status}`
        );
        if (isJsonResponse(response)) {
            const errorJson = await response.json();
            const {
                error: { key }
            } = errorJson;
            error.name = key;
        }
        error.status = response.status;
        throw error;
    }
    return response;
}

async function validateContentType(response) {
    const contentType = response.headers.get('content-type');
    if (
        !contentType ||
        (contentType.indexOf('application/json') === -1 && contentType.indexOf('text/plain') === -1)
    ) {
        throw new Error(`Invalid Content Type: ${response.status}`);
    }
    return response;
}

async function parseResponse(response) {
    if (isJsonResponse(response)) {
        return response.json();
    } else {
        return response.text();
    }
}

export function get(path, token) {
    return fetch(`${API_BASE_URL}${path}`, {
        method: 'GET',
        headers: headers(token)
    })
        .then(validateStatusCode)
        .then(validateContentType)
        .then(parseResponse);
}

export function post(path, token, data) {
    return fetch(`${API_BASE_URL}${path}`, {
        method: 'POST',
        body: data ? JSON.stringify(data) : null,
        headers: headers(token, true)
    })
        .then(validateStatusCode)
        .then(validateContentType)
        .then(parseResponse);
}

export function put(path, token, data) {
    return fetch(`${API_BASE_URL}${path}`, {
        method: 'PUT',
        body: data ? JSON.stringify(data) : null,
        headers: headers(token, true)
    })
        .then(validateStatusCode)
        .then(parseResponse);
}

export function del(path, token) {
    return fetch(`${API_BASE_URL}${path}`, {
        method: 'DELETE',
        headers: headers(token)
    })
        .then(validateStatusCode)
        .then(() => true);
}
