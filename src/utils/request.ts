import superagent, {
    Request
} from 'superagent';

interface Headers {
    [propName: string]: any;
}

interface Params {
    url: string;
    data?: any;
    headers?: Headers;
}

const commonRequest = (
    request: Request,
    headers: Headers
) => (
    new Promise((resolve, reject) => {
        Object.keys(headers).forEach((key: string) => {
            request.set(key, headers[key]);
        });
        request.end((error, res) => {
            if (error) return reject(error);
            resolve(JSON.parse(res.text));
        });
    })
);

export const get = (params: Params) => {
    const {
        url,
        data,
        headers
    } = params || {};
    const request = superagent.get(url);
    return commonRequest(request.send(data), headers || {});
};

export const post = (params: Params) => {
    const {
        url,
        data,
        headers
    } = params || {};
    const request = superagent.post(url);
    return commonRequest(request.send(data), headers || {});
};
