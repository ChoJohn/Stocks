/* global io */

const dashboardApiUrl = process.env.REACT_APP_DASHBOARD_API_ROOT;
// const dashboardApiUrl = "https://jsonplaceholder.typicode.com";

/**
 * parseToJsonPromise
 * Returns JSON result for the fetch response
 * e.g. parseToJsonPromise(data) => { ...values }
 *
 **/

function parseToJsonPromise(data) {
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

const apiGenerator = (url, uri, method, payload, type) => {
    let headers = {
        'Accept': 'application/json'
    };

    if (type !== "file") {
        headers["Content-Type"] = "application/json";
        payload = JSON.stringify(payload);
    }

    return fetch(`${url}${uri}`, {
        method,
        body: payload,
        headers
    }).then(parseToJsonPromise).catch(error => {
        console.log(error);
        return {
            successful: false, data: undefined, code: null
        };

    });
};

const dashboardApiGenerator = (uri, method, payload, type) => {
    return apiGenerator(dashboardApiUrl, uri, method, payload, type);
};

const networkAdapter = (generator) => {
    return {
        POST: (url, payload, type) => generator(url, 'POST', payload, type),
        PUT: (url, payload) => generator(url, 'PUT', payload),
        DELETE: (url) => generator(url, 'DELETE'),
        GET: (url, token, payload) => generator(url, 'GET', payload)
    }
};

const _dashboardRequestAPI = networkAdapter(dashboardApiGenerator);

// Stock Market API
// export const loadStockMarket = () => _dashboardRequestAPI.GET('/posts');

// TESTING
export const loadStockMarket = () => _dashboardRequestAPI.GET('/posts');


// // Contact
// export const contactUs = (payload) => _websiteRequestAPI.POST('/contact_us/', payload);
// export const subscribeEmail = (payload) => _websiteRequestAPI.POST('/email_subscription/', payload);

// // Social Meter
// export const loadMeter = (payload) => _websiteRequestAPI.POST('/meter/', payload);
// export const authenticate = (payload) => _websiteRequestAPI.POST('/meter/barometer_user_details/', payload);
// export const reportBug = (payload) => _websiteRequestAPI.POST('/meter/report_bug/', payload);

// // Stripe
// export const loadSurveyId = (payload) => _dashboardRequestAPI.POST('/dashboardapp/certification/survey/', payload);
// export const loadPublishableKey = () => _dashboardRequestAPI.GET('/dashboardapp/configuration');
// export const loadSessionId = certification_survey_id => _dashboardRequestAPI.POST(`/dashboardapp/certification/${certification_survey_id}/payment/initiate/`);
