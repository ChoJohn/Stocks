import React, { useEffect, useReducer } from 'react';
import getStockPrice from '../api/alphaVantage';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';
import NavBar from '../components/NavBar';
import { dataFormat } from '../utils';

const initialState = {
    stocks: [],
    colours: [],
    account: {
        allocations: [],
        allocationTotal: 0,
        totalInvestment: 0
    },
    darkMode: true,
    currentStockValue: []
};

export const DataContext = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                stocks: action.stockPayload.stocks,
                colours: action.colourPayload,
                account: action.accountPayload.account
            };
        case 'TOGGLE_DARK_MODE':
            return {
                ...state,
                darkMode: !state.darkMode
            };
        case 'FETCH_STOCK_PRICES':
            return {
                ...state,
                currentStockValue: [ 
                    ...state.currentStockValue,
                    action.currentStockPayload
                ]
            };
        default:
            return state;
    }
};

const Dashboard = () => {
    const stocksData = require('../Data/stocksData');
    const colours = require('../Data/colours');
    const accountData = require('../Data/account');
    
    const [ state, dispatch ] = useReducer(reducer, initialState);

    // Currently making an api call for one stock. 
    // Please read PART 2 in Notes.txt, SECTION 1
    let data = getStockPrice({
        'function': 'GLOBAL_QUOTE',
        'symbol': 'IBM'
    });

    // Loading data for most recent stocks
    useEffect(() => {
        // Format Data
        data = data ? dataFormat(data) : data;

        if (data) dispatch({
            type: 'FETCH_STOCK_PRICES',
            currentStockPayload: data
        });
    }, [data]);

    // Loading data for hardcoded data
    useEffect(() => {
        let newColour = colours.darkModeColours;
        if (state.darkMode) newColour = colours.darkModeColours;
        else newColour = colours.colours;
        
        dispatch({
            type: 'FETCH_DATA', 
            stockPayload: stocksData,
            colourPayload: newColour,
            accountPayload: accountData
        });
    }, [stocksData, colours, accountData, state.darkMode]);
    
    return (
        <DataContext.Provider value={{ state: state, dispatch: dispatch }}>
            <BrowserRouter>
                <div className={state.darkMode ? 'dashboard dark-mode' : 'dashboard light-mode'}>
                    <NavBar />
                    <Routes />
                </div>
            </BrowserRouter>
        </DataContext.Provider>
    );
};

export default Dashboard;
