// Please read PART 2 in Notes.txt, SECTION 3
// const dashboardApiUrl = process.env.REACT_APP_DASHBOARD_API_ROOT;
// const aplhaVantageApiKey = process.env.REACT_APP_DASHBOARD_API_KEY;
const alphaVantageApiUrl = 'https://www.alphavantage.co';
const alphaVantageApiKey = 'X2OGLJUSISUD8B27';

const parseToJsonPromise = (data) => {
    return new Promise(res => {
        data.json().then(object => {
            let response = {
                successful: [200, 201].includes(data.status),
                data: object,
                code: data.status
            };
            return res(response);
        }).catch(error => {
            res({
                successful: false,
                data: undefined,
                code: data.status
            });
        });
    });
}

const apiGenerator = (url, uri, method, payload) => {
    let headers = {
        'Accept': 'application/json'
    };

    headers['Content-Type'] = 'applications/json';
    payload = JSON.stringify(payload);

    // Please read PART 2 in Notes.txt, SECTION 2
    // testing fetch call
    return fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo', {
    // actual fetch call
    // return fetch(`${url}${uri}`, {
        method,
        body: payload,
        headers
    }).then(parseToJsonPromise).catch(error => {
        console.log(error);
        return {successful: false, data: undefined, code: null};
    });
};

const dashboardApiGenerator = (uri, method, payload) => {
    return apiGenerator(alphaVantageApiUrl, uri, method, payload);
};

const networkAdaptor = (generator) => {
    return {
        POST: (url, payload, type) => generator(url, 'POST', payload),
        PUT: (url, payload) => generator(url, 'PUT', payload),
        DELETE: (url) => generator(url, 'DELETE'),
        GET: (url, payload) => generator(url, 'GET', payload)
    };
};

const _dashboardRequestAPI = networkAdaptor(dashboardApiGenerator);

export const loadStockPrice = (queryString) => _dashboardRequestAPI.GET(`/query?${queryString}apikey=${alphaVantageApiKey}`);
