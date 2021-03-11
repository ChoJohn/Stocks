import { useEffect, useState } from 'react';
import { loadStockPrice } from './networks';
import { stringifyQueryParams } from '../utils';

// Handle API response
const GetStockPrice = (payload) => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await loadStockPrice(stringifyQueryParams(payload));
            if (!response.successful) {
                console.log('error fetching data');
            } else {
                setData(response.data);
            }
        }
        fetchData();
    }, []);
    
    return data;
};


export default GetStockPrice;