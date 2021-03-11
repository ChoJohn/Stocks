export function NumberFormat(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Helper function to format query params
export function stringifyQueryParams(queryParams = {}) {
    let params = '';
    Object.keys(queryParams).forEach(k => {
        params += `${k}=${queryParams[k]}&`;
    });
    return params;
}

// Helper function to format data retrieved from Alpha Vantage
export function dataFormat(data) {
    const parsedData = {};
    data = Object.entries(data)[0][1];
    const allKeys = Object.keys(data);

    allKeys.forEach(datapoint => {
        const key = datapoint.slice(4);
        const value = data[datapoint];
        parsedData[key] = value;
    })
    return parsedData;
}